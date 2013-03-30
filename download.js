/*jshint node:true, maxlen:200, forin:false*/
var request = require('request'),
    filed = require('filed');

var deps = {
    js: {
        'underscore.js': 'https://raw.github.com/documentcloud/underscore/1.4.4/underscore.js',
        'bootstrap.js': 'https://gist.github.com/listochkin/5275626/raw/c298ee42e30383099fae3b4930e3ca6b0bf51384/bootstrap-2.3.1.all.js',
        'jquery.js': 'http://code.jquery.com/jquery-1.9.1.js',
        'jquery-migrate.js': 'http://code.jquery.com/jquery-migrate-1.1.1.js',
        'handlebars.js': 'https://raw.github.com/wycats/handlebars.js/1.0.0-rc.3/dist/handlebars.js',
        'knockout.js': 'https://raw.github.com/SteveSanderson/knockout/v2.2.1/build/output/knockout-latest.debug.js',
        'socket.io-client.js': 'https://gist.github.com/listochkin/5090981/raw/86fde49f63fcaf90f131359dd9889cd47622fcc3/socket.io-client.js',
        //'anima.js': 'https://raw.github.com/lvivski/anima/master/anima.js'
        'angular.js': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular.js',
        'ember.js': 'https://raw.github.com/emberjs/ember.js/release-builds/ember-1.0.0-rc.1.js',
        'ember-data.js': 'https://gist.github.com/listochkin/5266245/raw/00a6e254e6e5d4e9048446de01b285638332910e/ember-data.js'
    },
    styl: {
        //'normalize.styl': 'https://raw.github.com/necolas/normalize.css/v2.1.0/normalize.css'
    }
};

for (var group in deps)
    for (var file in deps[group])
        request(deps[group][file]).pipe(filed('./client/' + group + '/vendor/' + file));
