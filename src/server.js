const Hapi = require('@hapi/hapi');
const Routes = require('./routes');

class Server {
  #hostname = null;

  #portnumber = null;

  #serverOptions = null;

  constructor(hostname, portnumber) {
    this.#hostname = hostname;
    this.#portnumber = portnumber;
    this.#serverOptions = {
      host: this.#hostname,
      port: this.#portnumber,
      routes: {
        cors: {
          origin: ['*'],
        },
      },
    };
  }

  async run() {
    const server = Hapi.server(this.#serverOptions);
    server.route(Routes.endpoint);
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
  }
}

module.exports = Server;
