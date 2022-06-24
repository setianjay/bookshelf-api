const Server = require('./service/server');

const myServer = new Server('localhost', 5000);
myServer.run();
