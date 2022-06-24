const ResponseStatus = require('../constants/response-status');
const ResponseMessage = require('../constants/response-message');

class Handler {
  static testHandler = (request, h) => {
    const response = h.response({
      status: ResponseStatus.success,
      message: ResponseMessage.testing,
    });
    return response;
  };
}

module.exports = Handler;
