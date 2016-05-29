/**
 * http://usejsdoc.org/
 */
var request = require('request'),
sf = require('./SF_API');

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
