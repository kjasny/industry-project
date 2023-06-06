Our Challenge & The Scenario
E-commerce marketing is growing at an unprecedented speed. Here at Privy, we are trying to find new
channels so merchants can reach out to their customers and send custom promotions to increase their sales.
One of the services Privy provides to their customers is email marketing. However, after doing some
investigation, email is losing a lot of power among younger generations. This New York Times article explains
why younger generations are not using email anymore and why they are switching to use more and more
text messages. After seeing this new market opportunity, Privy has decided to expand its business to include
SMS marketing. This new channel will match Privy’s mission, which is to help grow small businesses by
providing new tools to our customers.

The Project
Our project aims to implement a CRM dashboard that allows merchants to send personalized SMS to their
customers. The dashboard will allow users to upload a list of customers through a CSV file. It will also allow
merchants to view the list of customers they uploaded with their respective information, such as first name,
last name, email, phone number, and other information imported for example the price of their last order.
With this information, we want to be able to filter customers based on their last sale price and send custom
SMS to the filtered customers, offering them a discount on their next purchase.

PRIVY SMS MARKETING INITIATIVE - INITIAL PROJECT QUESTIONS

Twilio Info:

Node.js Quickstart instructions - https://www.twilio.com/docs/sms/quickstart/node
Other languages are available


Privy Info:

White and purple color scheme
Simplistic dashboard


Questions:

Do we need to integrate some kind of password authentication for the client to be able to submit their CSV list of clients?
Are there any required data fields the CSV file should have such as first name, last name, phone number, email, last order amount, etc.?
Should the client be able to edit or delete the client list once it is submitted to our site?


Necessary Routes:

GET route to get to the initial dashboard
POST route to upload the CSV file of clients
GET route to display the uploaded list of clients 
GET route to display the filtered client list
GET route to bring up the text message box
POST/GET route to send and show the the texts were sent successfully
Possibly the PUT/PATCH and DELETE routes to update or delete from the client list


