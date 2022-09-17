from flask import Flask

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb+srv://admin:zurich@hackzurich2022.xuijvsx.mongodb.net/?retryWrites=true&w=majority',
}