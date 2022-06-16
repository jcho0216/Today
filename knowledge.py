import requests
from bs4 import BeautifulSoup

list_arr = []

url = 'https://loners.tistory.com/191'

response = requests.get(url)

knowledgeList = []

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    titles = soup.select(
        '#content > div.inner > div.entry-content > div > p > span')
    for i in titles:
        knowledgeList.append(i.text)


else:
    print(response.status_code)

print(knowledgeList)
