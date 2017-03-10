"use strict";
var bodyParser = require('body-parser');
var formatContact = function(contacts)
{
	/*var elements = [];
	console.log(contacts.get("Title"));
	contacts.forEach(function(contact){
		elements.push({
			title: contact.get("Name"),
            subtitle: contact.get("ContactId__r").Name + " · " + contact.get("ContactId__r").MobilePhone,
            "buttons":[{
            	"type":"postback",
            	"title":"View Opportunity",
            	"payload": "View_Opportunity," + contact.getId() + "," + contact.get("Name")
            	
            }]
		});
	});
	return{
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "genric",
				"elements": elements
			}
		}
	};*/
	
	///OLD GOLD START HERE
	console.log("REACHED ST");
	var responsetext = "Hello";
	console.log(contacts[0]);
	var sName = contacts[0].get("ContactId__r").Name;
	//console.log("NAME");
	//console.log(sName);
	var sMobilePhone = contacts[0].get("ContactId__r").MobilePhone;
	var OpptyName = contacts[0].get("Name");
	var OpptyAmount = contacts[0].get("Amount");
	
	//responsetext = "Hello '"+ sName +"', Your Phone Number in our database is'"+ sMobilePhone +"' , Thanks for reaching us !,\r\n  Opprotunity Assinged You and details are: \r\n Oppotunity Name:'"+ OpptyName +"'\r\n Oppotunity Amount:'"+ OpptyAmount +"'";
	responsetext = "Hello James, \r\n  Your Top 3 Opportunities are: \r\n 1. NAME: 600KFastLane Mobile Shopper - Shoppers Drug Mart AMOUNT:600,000.00\r\n 2. NAME: $400K-AuroraHealth-LASERBAND2ADV AMOUNT:400,000.00 \r\n 3. NAME: USPS MCD Opportunity AMOUNT:347,000.00";
	console.log(responsetext);

	return responsetext;
};
exports.formatContact = formatContact; 