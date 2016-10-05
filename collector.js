
var Server = require('beebon-collector');
var config = require('config');

var server = new Server(config);
server.run();