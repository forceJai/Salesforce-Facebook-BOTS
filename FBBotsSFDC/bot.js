/**
 * 
 * Porject is referenced based on Facebook, Inc graph-api-webhooks-samples
 * "url": "https://github.com/fbsamples/graph-api-webhooks-samples"
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 * newchange
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var sf = require('./modules/SF_API');
var fb = require('./modules/FB_webhook');

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));

app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log(req);
  res.send('It works!');
});

app.get('/salesforce', function(req, res) {
	  if(sf.err)
		  {
		  	res.send('Connection Not Happened');
		  }
	  else{
	  res.send('It works! Token' + sf.oauth.access_token);
	  }
	});

/*app.get(['/facebook', '/instagram'], function(req, res) {
  if (
    req.param('hub.mode') == 'subscribe' &&
    req.param('hub.verify_token') == 'token'
  ) {
    res.send(req.param('hub.challenge'));
  } else {
    res.sendStatus(400);
  }
});*/

app.get('/facebook', fb.webhookGet);

app.post('/facebook', function(req, res) {
  console.log('Facebook request body:');
  console.log(req.body);
  // Process the Facebook updates here
  res.sendStatus(200);
});

app.post('/instagram', function(req, res) {
  console.log('Instagram request body:');
  console.log(req.body);
  // Process the Instagram updates here
  res.sendStatus(200);
});

app.listen();