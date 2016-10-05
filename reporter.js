
var Server = require('beebon-reporter');
var config = require('config');

var server = new Server(config);
server.run();