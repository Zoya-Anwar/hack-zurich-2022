import requests
# search_terms = ['love', ]
def getTwitterImagesDocuments(search_terms):
  url = 'https://api.apify.com/v2/actor-tasks/premium_goldenlarch~twitter-image-scraper-task-1/run-sync-get-dataset-items?token=apify_api_ehnH6M9Fga1X91zyeHc62czuiv4WGp1UoIwL'
  myobj = {'searchTerms': search_terms, 'tweetsDesired':10}
  
  x = requests.post(url, json = myobj)
  
  print(x.text)