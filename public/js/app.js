;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0](function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
(function(){/*jshint browser:true */
/*global require*/
'use strict';

window.counters = {
	angular: [],
	ember: [],
	knockout: []
}

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

})()
},{}]},{},[1])
;