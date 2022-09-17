from db import db

class ImageCaptions(db.Document):
    imageId = db.ObjectIdField()
    userId = db.ObjectIdField()
    caption = db.StringField()    

    def to_json(self):
        return {
            "imageId": self.imageId,
            "userId": self.userId,
            "caption": self.caption,
        }

