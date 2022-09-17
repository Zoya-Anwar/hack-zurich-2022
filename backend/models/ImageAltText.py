from db import db

class ImageAltText(db.Document):
    imageId = db.StringField()
    userName = db.StringField() 
    altText = db.StringField()    

    def to_json(self):
        return {
            "imageId": self.imageId,
            "userName": self.userName,
            "altText": self.altText,
        }

