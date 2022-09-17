from flask import Flask

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': 'your_database',
    'host': 'localhost',
    'port': 27017
}