/**
 * http://usejsdoc.org/
 */
var request = require('request'),
sf = require('./SF_API');

function botResponse(message, recipient)
{
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token: process.env.FB_TOKEN},
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

exports.webhookGet = function(req,res)
{
	if (
		    req.param('hub.mode') == 'subscribe' &&
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
			botResponse({text:'Hello I am BOT'}, sender);
			console.log('SENDER ID' +sender);
		}
	}
	res.sendStatus(200);
};
