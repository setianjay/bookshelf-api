const Handler = require('./handler');
const RequestMethod = require('../constants/request-method');
const RequestPath = require('../constants/request-path');

class Routes {
  static endpoint = [{
    method: RequestMethod.post,
    path: RequestPath.books,
    handler: Handler.addBookHandler,
  }];
}

module.exports = Routes;
