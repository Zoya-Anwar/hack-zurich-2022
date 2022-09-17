from db import db

class User(db.Document):
    name = db.StringField()
    email = db.StringField()
    skills = db.ListField(db.StringField())
    
    def to_json(self):
        return {
            "name": self.name,
            "email": self.email,
            "skills": self.skills,
        }