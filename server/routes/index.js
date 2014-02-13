/*jslint node: true */
'use strict';
exports.messages = function(req, res) {
    res.json([
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'Express'
    ]);
};