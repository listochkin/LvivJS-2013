/*jshint node:true */
'use strict';
var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    emitStream = require('emit-stream'),
    // JSONStream = require('JSONStream')
    stringify = require('json-stringify-safe'),
    through = require('through');

var T = new Twit(JSON.parse(fs.readFileSync(path.join(__dirname, 'twitter-api-keys.json'))));

var stream = T.stream('statuses/filter', {
	track: [
		'javascript', 'es6', 'ecmascript', 'js',
		'node.js', 'nodejs', 'typescript', 'coffeescript',
		'backbone', 'angular', 'ember', 'knockout',
		'mozilla', 'opera', 'firefox',
		'substack', 'izs', 'mikeal', 'tjholowaychuk', 'wycats',
		'brendaneich', 'codepo8', 'horse_js'
	],
	'stall_warnings': true
});
// var jsonStream = through(function (data) {
// 	this.write(stringify(data));
// })
// stream.on('twit', function (twit) {
// 	jsonStream.write(twit);
// })
// stream.start();
module.exports = stream;
//emitStream(stream);
