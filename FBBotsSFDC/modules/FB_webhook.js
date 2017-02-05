"use strict";
var request = require('request');
var SF = require('./SF_API');
var ST = require('./SetTemplate');

exports.sf = SF;
function botResponse(message, recipient)
{
	console.log(message);
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:process.env.FB_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: recipient},
            message: message
        	}
		},function(error, response, body) {
            if (error) {
                console.log('Error sending message: ', error);
              } else if (response.body.error) {
                console.log('Error: ', response.body.error);
              }
	});
}



function sInterpret(text, sender){
	//var salutation = text.match(/Hello/i); 
	//if(text.match(/Hello/i) || text.match(/hello/i) || text.match(/Hi/i) || text.match(/hi/i)){
	SF.IntialIntract().then(function(results)
		{
		console.log("BEFORE ST CALL");	
		var cMessage = ST.formatContact(results); 
		botResponse({text:cMessage},sender);
		});
	//}
}

exports.webhookGet = function(req,res)
{
	if (
		    req.param
		    ('hub.mode') == 'subscribe' &&
		    req.param('hub.verify_token') == 'token'
		  ) {
		    res.send(req.param('hub.challenge'));
		  } else {
		    res.sendStatus(400);
		    
		  }
};

exports.webhookPost = function(req,res)
{
	var messaging_events = req.body.entry[0].messaging;
	for(var i = 0; i < messaging_events.length; i++){
		var event = messaging_events[i];
		var sender = event.sender.id;
		if(event.message && event.message.text){
			console.log("FACEBOOK ID IS:" +sender);
			//botResponse({text:'Hello I am AWESOME BOT to help you'}, sender);
			sInterpret({text:event.message.text}, sender);
		}
	}
	res.sendStatus(200);
};

