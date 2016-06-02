"use strict";

exports.formatContact = function(contacts)
{
	var elements = [];
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
	};
};