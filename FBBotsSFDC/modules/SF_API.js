"use strict";

var nForceAuth = require('nforce'),
SFclientId = '3MVG9sG9Z3Q1Rlbf.rH3WjK5kIQQ37M7ioDSWxIR7C9epVVEd6HIRyKKfLobJ_DFfX9MLmS3jvW9DUZKPTm4S',
SFSecret = '3567212960861136536',
SFusername = 'jairaj@gmail.com',
SFpassword = 'Shinsei123b'
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

module.exports = connection;
