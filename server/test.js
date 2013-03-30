/*jshint node:true */
'use strict';
var twitter = require('./twitter'),
    emitStream = require('emit-stream'),
    JSONStream = require('JSONStream');

//twitter.pipe(process.stdout);
var ev = emitStream(twitter);
setTimeout(function () {
	console.log('Time is up');
}, 40000);
ev.on('tweet', function (tweet) {
	console.log(tweet);
	// console.log(JSON.stringify(tweet));
});
