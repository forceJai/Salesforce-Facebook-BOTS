# Salesforce-Facebook-BOTS integration 

## Get detailed documentation in repository's [wiki](https://github.com/forceJai/Salesforce-Facebook-BOTS/wiki/BOT-ified-Salesforce-Facebook-BOT-integration)

This is sample Salesforce integration with Facebook BOT using Messenger/Graph API. 
Key operation it perform:

1. If existing customer interact with this BOT: 
   - BOT will create an activity
   - Present existing pending order list as response to cancel/change and a button to check for product

2. If new customer interact with BOT
  - Create Lead and button to check product

##Tech
NodeJS, Heroku, Facebook Messenger API & Graph API

## Steps to Configure 
###Salesforce
1. Create Connected APP for NodeJS app
2. Introduce new  field facebookID in Contact object, alternatively you can use “social customer service” module to map facebookID

###NodeJS APP
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

###Heroku Configuration
Add following config variables <br>
        1. FB_TOKEN - Facebook Page Token from settings <br>
        2. SF_CONSUMER_KEY - Salesforce Consumer Key of Connected App <br>
        3. SF_CONSUMER_SECRET - Consumer Secret of your Salesforce Connected App <br>
        4. SF_USER - Salesforce username <br>
        5. SF_PASSWORD - Salesforce password <br>

###Facebook
Components of integration:
Facebook App :  This is where you setup your Webhook & retrieve your page access token and submit your app for approvals
Facebook Page:  This will be identity to BOT
Webhook URL:  Secure callbacks  to send messaging event

####Webhook Setup
1. Create Facebook App
2. Setup Facebook Messenger Platform
3. Create Rest service for callback URL 
	 This will be your heroku app url /facebook example  https://xyx.herokuapp.com/facebook


## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
