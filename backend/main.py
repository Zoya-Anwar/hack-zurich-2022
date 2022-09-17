import json
from models.ImageAltText import ImageAltText
from server import app
from db import db
from flask import request, jsonify
from models.User import User
from models.Image import Image
from resume_parser import resumeparse
from flask_cors import CORS
from twitterScraper import getRandomTwitterImageapDocuments
import spacy
import time

NAME = "ZOYA ANWAR"

db.init_app(app)
CORS(app, resources={r"*": {"origins": "*"}})

@app.route('/', methods=['GET'])
def query_records():
    name = request.args.get('name')
    user = User.objects(name=name).first()
    if not user:
        return jsonify({'error': 'data not found'})
    else:
        return jsonify(user.to_json())

@app.route('/', methods=['PUT'])
def create_record():
    with open('uploaded_pdf', 'wb') as f:
        f.write(request.stream.read())
    data = resumeparse.read_file('uploaded_pdf')
    cleaned_skills = clean_skills(data['skills'])
    user = User(email=data['email'],
                name=data['name'],
                skills=cleaned_skills)
    user.save()
    print(user.to_json())
    return jsonify(user.to_json())

def clean_skills(skills):
  # get strongest NEs from skills to make 
  # keyword searching twitter less noisy

  nlp = spacy.load("en_core_web_sm")
  cleaned_skills = []

  for skill in skills:
    term = nlp(skill).ents
    for t in term:
        cleaned_skills.append(t.text)

  print(cleaned_skills)
  return cleaned_skills
        


@app.route('/getTweetImage', methods=['GET'])
def get_tweet_image():
    user = User.objects(name=NAME).first()

    # Check image not already in database which needs doing and not already done by user
    for skill in user.skills: 
        skillImages = Image.objects(topic=skill)
        for skillImage in skillImages: 
            if skillImage.altText == "":
                userImageAltText = ImageAltText.objects(imageID=skillImage.tweetId, userName = NAME)
                if userImageAltText is None: 
                    return jsonify(skillImage.to_json())
            
    # otherwise loop until new appropriate image found 
    while True:
        rndImage, rndTopic = getRandomTwitterImageapDocuments(user.skills)
        print(rndImage)
        print("HERE!")
        rndImage = rndImage[0]
        image = Image.objects(tweetId = rndImage['id']).first()
        # check doesn't exist in the images
        if not image:
            # # check image actually on topic (spam detection)
            # labels = detect_labels_uri(rndImage['URL'])
            
            # if validate_image_on_topic(labels, rndTopic):

            # upload image to database
            newImage  = Image(tweetId=rndImage['id'],
            tweetUrl=rndImage['url'],
            tweetText=rndImage['full_text'], 
            topic = [rndTopic], 
            altText = "")
            newImage.save()
            print(newImage)
            break

    return jsonify(newImage.to_json())

def detect_labels_uri(uri, topic):
    """Detects labels in the file located in Google Cloud Storage or on the
    Web."""
    from google.cloud import vision

    client = vision.ImageAnnotatorClient()
    image = vision.Image()
    image.source.image_uri = uri

    response = client.label_detection(image=image)
    labels = response.label_annotations
    print(labels)


    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))
    return labels 

def validate_image_on_topic(labels, topic):
    nlp = spacy.load("en_core_web_sm")
    for label in labels:
        nlp_label = nlp(label)
        nlp_topic = nlp(topic)
        if nlp_label.similarity(nlp_topic) > 0.4: 
            return True
    else:
        return False

@app.route('/postTweetAltText', methods=['PUT'])
def post_tweet_images():

    # add new altext record
    record = json.loads(request.data)
    newImageAltText = ImageAltText(imageId=record['image_id'], 
    userName = NAME, 
    altText = record['alt_text'])

    print(record)
    newImageAltText.save()

    # mark as done if semantically similar enough to another entry 
    similarity_check_alttext(record['image_id'])

    return jsonify(newImageAltText.to_json())


def similarity_check_alttext(image_id):
    # check if altext is complete using Spacy similarity checker
    nlp = spacy.load("en_core_web_sm")
    imagesAltText = ImageAltText.objects(imageId = image_id)
    print("Here")
    for image in imagesAltText: 
        for image2 in imagesAltText: 
            if image != image2: 
                image1AltText = nlp(image.altText)
                image2AltText = nlp(image2.altText)
                print(f"The similarity score is {image1AltText.similarity(image2AltText)}")
                if image1AltText.similarity(image2AltText) >= 0.5: 
                    # We are complete! 
                    print("We are complete with an image")
                    overall_image = Image.objects(tweetId=image_id).first()
                    overall_image.update(altText=image.altText)
                    overall_image.save()

 



if __name__ == "__main__":
    app.run("0.0.0.0")