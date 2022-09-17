from db import db

class Image(db.Document):
    tweetId = db.StringField()
    tweetUrl = db.StringField()
    tweetText = db.StringField()
    topic = db.ListField(db.StringField())
    altText = db.StringField()
    
    def to_json(self):
        return {
            "tweetId": self.tweetId,
            "tweetUrl": self.tweetUrl,
            "tweetText": self.tweetText,
            "topic": self.topic, 
            "altText": self.altText
        }