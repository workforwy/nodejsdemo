var fs = require('fs');

var path = '/Users/wy/MyProjects/nodejsdemo/src/input1.txt';

var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');
