from db import db

class Image(db.Document):
    tweetId = db.StringField()
    topics = db.ListField(db.StringField())
    
    def to_json(self):
        return {
            "tweetId": self.tweetId,
            "topics": self.topics,
        }