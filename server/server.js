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

var useMocks = true;

if (!useMocks) {
    var sockets = [];
    var twitStream = require('./twitter');

    twitStream.on('tweet', function (tweet) {
        // console.log(tweet);
        sockets.forEach(function (socket) {
            socket.emit('tweet', stringify(tweet));
        })
    });

    twitStream.start();    
} else {
    var tweets = fs.readFileSync(path.join(__dirname, 'tweets.mock.json'), 'utf8').split('\n');
    var i = 0;
}
app.sockets.on('connection', function (socket) {
    if (!useMocks) {
        sockets.push(socket);
    } else {
        setInterval(function () {
            var tweet = tweets[i];
            socket.emit('tweet', tweet);
            i = (i + 1) % tweets.length;
        }, 1000);
    }
});
app.httpServer.listen(8008);
