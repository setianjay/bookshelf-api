const Handler = require('./handler');
const RequestMethod = require('../constants/request-method');
const RequestPath = require('../constants/request-path');

class Routes {
  static endpoint = [{
    method: RequestMethod.get,
    path: RequestPath.testPath,
    handler: Handler.testHandler,
  }];
}

module.exports = Routes;
