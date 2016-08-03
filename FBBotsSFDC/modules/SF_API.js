"use strict";
var bodyParser = require('body-parser');
var request = require('request');
var nForceAuth = require('nforce'),
Promise = require('promise'),
SFclientId = process.env.SF_CONSUMER_KEY,
SFSecret = process.env.SF_CONSUMER_SECRET,
SFusername = process.env.SF_USER,
SFpassword = process.env.SF_PASSWORD
;

var connection = nForceAuth.createConnection({
	clientId: SFclientId,
	clientSecret: SFSecret,
	redirectUri: 'http://localhost:3000/oauth/_callback',
	mode: 'single',
	autoRefresh:true});

connection.authenticate({ username: SFusername, password: SFpassword }, function(err,resp){
	 if (err) {
         console.log("Authentication error - " + err);
     } else {
         console.log('Authentication successful. Cached Token: ' + connection.oauth.access_token);
     }
});

 var IntialIntract = function(Id)
{
	
	 return new Promise(function(resolve, reject){
			connection.query({query: "SELECT Id, Name, Title, Account.Name, Phone, MobilePhone, Email, FacebookID__c FROM Contact WHERE FacebookId__c = '"+ Id +"' LIMIT 1" }, function(err, res) 
					{
			    if(err)
			    { console.error(err);
			    	reject("AnError Occured");}
			    	    else { 
			    	    	console.log("QUERY SUCCESS");
			    	    	console.log(res.records);
			   resolve(res.records);
			   }
			   });
			});
};


exports.IntialIntract = IntialIntract;
exports.connection = connection;

