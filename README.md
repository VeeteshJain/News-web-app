# News-web-app
====================================================
Installation
1. npm install
2. bower install
3. node server.js
4. navigate to http://localhost:3000/top

NOTE:- since news API dosent support CROSS doamin request so you needs to use chrome extention CORS to run this application.
1. install this chrome extention.
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi
2. run application.


Requirements


You will be building an Awesome News web app which lists top news items for certain categories.


You can use the following set of RSS APIs to fetch the news items for a category.


Top Stores : http://feeds.feedburner.com/NdtvNews-TopStories

Latest Stories: http://feeds.feedburner.com/NDTV-LatestNews

Trending Stories : http://feeds.feedburner.com/NDTV-Trending


The webpage that you build should satisfy these basic requirements: 

- the page should be mobile friendly

- For each news item, it should display :

a) Title

b) Image (if available). In case the image is not available, it should display a default placeholder image.

e.g. http://image.shutterstock.com/display_pic_with_logo/82808/82808,1318143228,2/stock-vector-no-photo-available-or-missing-image-86220103.jpg


c) Timestamp


- Every 15 seconds, update the news page in the background & show the latest news

- On the header, display the last updated time  when the data was successfully fetched from the news APIs. 

- In  case of no network connection/API failure, it should continue to display the old news. 

- Animate the news page in some way (fade/dissolve, sliding, etc.) 

when user switches from one category to the other.


You have about 2 hours of coding time to complete the project. 

We realize that's a tight constraint, but try to ensure 

that the finished product represents your coding abilities.

Using any javascript framework will be an advantage.
