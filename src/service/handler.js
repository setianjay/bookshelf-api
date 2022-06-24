const { nanoid } = require('nanoid');
const books = require('../model/books');
const ResponseStatus = require('../constants/response-status');
const ResponseMessage = require('../constants/response-message');

class Handler {
  static addBookHandler = (request, h) => {
    const {
      name, year, author, summary, publisher, pageCount, readPage, reading,
    } = request.payload;

    let response = null;

    if (name === undefined) {
      response = h.response({
        status: ResponseStatus.fail,
        message: ResponseMessage.addingBookWithoutNameBody,
      })
        .code(400);

      return response;
    }

    if (readPage > pageCount) {
      response = h.response({
        status: ResponseStatus.fail,
        message: ResponseMessage.addingBookWithReadPageGraterThanPageCount,
      })
        .code(400);

      return response;
    }

    const id = nanoid(16);
    const finished = readPage === pageCount;
    const insertedAt = new Date().toISOString();
    const updateAt = insertedAt;

    const newBook = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      insertedAt,
      updateAt,
    };

    books.push(newBook);

    const isBookAvaible = books.filter((book) => book.id === id).length > 0;

    if (isBookAvaible) {
      response = h.response({
        status: ResponseStatus.success,
        message: ResponseMessage.addingBookSuccessfully,
        data: {
          bookId: id,
        },
      })
        .code(201);

      return response;
    }

    response = h.response({
      status: ResponseStatus.error,
      message: ResponseMessage.addingBookUnsuccessfully,
    })
      .code(500);

    return response;
  };
}

module.exports = Handler;
