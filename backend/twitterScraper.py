import requests
import random
# search_terms = ['love', etc ]
def getRandomTwitterImageapDocuments(search_terms, count):
  url = 'https://api.apify.com/v2/actor-tasks/premium_goldenlarch~twitter-image-scraper-task-1/run-sync-get-dataset-items?token=apify_api_ehnH6M9Fga1X91zyeHc62czuiv4WGp1UoIwL'
  term = random.choice(search_terms)
  myobj = {'searchTerms': [term], 'tweetsDesired': count}
  x = requests.post(url, json = myobj)

  return x.json(), term