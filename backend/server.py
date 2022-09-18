from flask import Flask

app = Flask(__name__)

# app.config['MONGODB_SETTINGS'] = {
#     'host': 'mongodb+srv://admin:zurich@altruit.bolj11g.mongodb.net/?retryWrites=true&w=majority',
# }
app.config['MONGODB_SETTINGS'] = {
    'db': 'altruit',
    'host': 'localhost',
    'port': 27017
}