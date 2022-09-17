import json
from server import app
from db import db
from flask import request, jsonify
from models import User
from resume_parser import resumeparse


db.init_app(app)

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
    record = json.loads(request.data)
    data = resumeparse.read_file(record['cv'])
    user = User(email=data['email'],
                name=data['name'],
                skills=data['skills'])
    user.save()
    return jsonify(user.to_json())

if __name__ == "__main__":
    app.run("0.0.0.0")