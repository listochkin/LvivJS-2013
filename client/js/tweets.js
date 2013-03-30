/*jshint browser:true */
/*global require*/
'use strict';

var socket = io.connect('http://localhost');

var frames = [
	document.getElementById('knockout').contentWindow,
	document.getElementById('angular').contentWindow,
	document.getElementById('ember').contentWindow
];

socket.on('tweet', function (tweet) {
    frames.forEach(function (frame) {
    	frame.postMessage(tweet, window.location.origin);
    });
});
