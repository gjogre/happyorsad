/*jslint node: true */
'use strict';
var data = {
	"messages": [
		{
			"text" : "no voe"
		},
		{
			"text" : "this is syvältä"
		}
	]
};

exports.messages = function(req, res) {
	var messages = [];
	data.messages.forEach(function(message, i) {
		messages.push({
			text : message.text
		});
	});
    res.json({
        messages: messages
    });
};

// POST
exports.addPost = function (req, res) {
  data.messages.unshift(req.body);
  res.json(req.body);
};