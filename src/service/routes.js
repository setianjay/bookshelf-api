const Handler = require('./handler');
const RequestMethod = require('../constants/request-method');
const RequestPath = require('../constants/request-path');

class Routes {
  static endpoint = [
    {
      method: RequestMethod.post,
      path: RequestPath.books,
      handler: Handler.addBookHandler,
    },
    {
      method: RequestMethod.get,
      path: RequestPath.books,
      handler: Handler.getAllBookHandler,
    }];
}

module.exports = Routes;
