"use strict";

var formatContact = function(contacts)
{
	/*var elements = [];
	console.log(contacts.get("Title"));
	contacts.forEach(function(contact){
		elements.push({
			title: contact.get("Name"),
            subtitle: contact.get("Title") + " at " + contact.get("Account").Name + " · " + contact.get("MobilePhone") + "FacebookID: " + contact.get("FacebookId__c"),
            "buttons":[{
            	"type":"postback",
            	"title":"View Notes",
            	"payload": "view_notes," + contact.getId() + "," + contact.get("Name")
            	
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
	console.log("REACHED ST");
	var responsetext = "Hello";
	if(contacts)
		{
	var Name = contacts[0].get("Name");
	var MobilePhone = contacts[0].get("MobilePhone");
	responsetext = "Hello '"+ Name +"', Your Phone Number in our database is'"+ MobilePhone +"' , Thanks for reaching us";
	console.log(responsetext);
		}
	return responsetext;
};
exports.formatContact = formatContact; 