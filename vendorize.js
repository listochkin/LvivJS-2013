/*jshint node:true */
'use strict';
var filed = require('filed'), fs = require('fs');

var libs = [
	'jquery',
	'jquery-migrate',
	'bootstrap',
	'socket.io-client',
	'knockout',
	'underscore',
	'handlebars',
	'ember',
	'angular'
];

var output = filed('./public/js/vendor.js');
libs.map(function (lib) {
    return fs.readFileSync('./client/js/vendor/' + lib + '.js', 'utf8');
}).forEach(function (data) {
	output.write(data + '\n;\n');
});
