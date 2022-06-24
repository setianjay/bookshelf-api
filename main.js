const Server = require('./src/server');

const myServer = new Server('localhost', 5000);
myServer.run();
