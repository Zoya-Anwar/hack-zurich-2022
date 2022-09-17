import json
from server import app
from db import db
from flask import request, jsonify
from models.User import User
from resume_parser import resumeparse
from flask_cors import CORS



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

if __name__ == "__main__":
    app.run("0.0.0.0")