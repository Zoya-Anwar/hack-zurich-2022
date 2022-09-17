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
    user = User(email=data['email'],
                name=data['name'],
                skills=data['skills'])
    user.save()
    print(user.to_json())
    return jsonify(user.to_json())

@app.route('/getTweets', methods=['GET'])
def get_tweet_images():
    user = User.objects(name=NAME).first()

    # Check image not already in database which needs doing and not already done by user
    for skill in user.skills: 
        skillImages = Image.objects(topic=skill)
        for skillImage in skillImages: 
            if skillImage.altText == "":
                userImageAltText = ImageAltText.objects(imageID = skillImage.tweetID, userName = NAME)
                if userImageAltText is None: 
                    return jsonify(skillImage.to_json())
            
    # otherwise loop until new appropriate image found 
    while True:
        rndImage, rndTopic = getRandomTwitterImageapDocuments(user.skills)
        image = Image.objects(tweetId = rndImage['Conversation_id']).first()
        # check doesn't exist in the images
        if not image:
            userImage = Image.objects(imageID  = rndImage['Conversation_id']).first()
            # check not a user image already
            if not userImage:
                # check image actually on topic (spam detection)
                labels = detect_labels_uri(rndImage['URL'])
               
                if validate_image_on_topic(labels, rndTopic):
                    # upload image to database
                    newImage  = Image(tweetId=rndImage['Conversation_id'],
                    tweetUrl=rndImage['URL'],
                    tweetText=rndImage['Full_text'], 
                    topic = rndTopic, 
                    altText = "")
                    newImage.save()
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
    nlp = spacy.load("en_core_web_md")
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
    newImageAltText = ImageAltText(imageID=record['image_id'], 
    userName = NAME, 
    altText = record['alt_text'])
    newImageAltText.save()

    # mark as done if semantically similar enough to another entry 
    similarity_check_alttext(record['image_id'], record['alt_text'])

    return jsonify(newImageAltText.to_json())


def similarity_check_alttext(image_id):
    # check if altext is complete using Spacy similarity checker
    nlp = spacy.load("en_core_web_md")
    imagesAltText = ImageAltText.objects(imageId = image_id)
    for image in imagesAltText: 
        for image2 in imagesAltText: 
            if image != image2: 
                image1AltText = nlp(image.altText)
                image2AltText = nlp(image2.altText)
                if image1AltText.similarity(image2AltText) >= 0.8: 
                    # We are complete! 
                    image = Image.objects(tweetId=NAME).first()
                    image.update(ImageAltText=True)
                    image.save()

 



if __name__ == "__main__":
    app.run("0.0.0.0")