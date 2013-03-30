/*jshint node:true */
'use strict';
var fs = require('fs'),
    path = require('path'),
    tako = require('tako'),
    app = tako({
        https: {
            key: fs.readFileSync(path.join(__dirname, '../public/key.pem')),
            cert: fs.readFileSync(path.join(__dirname, '../public/cert.pem'))
        }
    }),
    stringify = require('json-stringify-safe');

// static files
app.route('/').file(path.join(__dirname, '../public/index.html'));
app.route('/*').files(path.join(__dirname, '../public'));

var twits = fs.readFileSync(path.join(__dirname, 'tweets.mock.json'), 'utf8').split('\n');
var i = 0;
app.sockets.on('connection', function (socket) {
	setInterval(function () {
		var twit = twits[i];
		// console.log(twit);
		socket.emit('twit', twit);
		i = (i + 1) % twits.length;
	}, 1000);
});
app.httpServer.listen(8008);
