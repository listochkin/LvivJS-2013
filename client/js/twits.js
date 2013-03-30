/*jshint browser:true */
/*global require*/
'use strict';

var socket = io.connect('http://localhost');

var frames = [
	document.getElementById('knockout').contentWindow,
	document.getElementById('angular').contentWindow,
	document.getElementById('ember').contentWindow
];

socket.on('twit', function (twit) {
	// console.log(twit);
    frames.forEach(function (frame) {
    	frame.postMessage(twit, window.location.origin);
    });
});
