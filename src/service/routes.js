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
    },
    {
      method: RequestMethod.get,
      path: RequestPath.book,
      handler: Handler.getBookByIdHandler,
    },
    {
      method: RequestMethod.put,
      path: RequestPath.book,
      handler: Handler.updateBookByIdHandler,
    },
    {
      method: RequestMethod.delete,
      path: RequestPath.book,
      handler: Handler.deleteBookByIdHandler,
    },
  ];
}

module.exports = Routes;
