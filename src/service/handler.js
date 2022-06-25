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
    const updatedAt = insertedAt;

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
      updatedAt,
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

  static getAllBookHandler = (request, h) => {
    const { name, reading, finished } = request.query;
    let filteredBooks = books;

    if (name !== undefined) {
      filteredBooks = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (reading !== undefined) {
      const isReading = reading === 1;
      filteredBooks = books.filter((book) => book.reading === isReading);
    }

    if (finished !== undefined) {
      const isFinished = finished === 1;
      filteredBooks = books.filter((book) => book.finished === isFinished);
    }

    const response = h.response({
      status: ResponseStatus.success,
      data: {
        books: filteredBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });

    return response;
  };

  static getBookByIdHandler = (request, h) => {
    const { id } = request.params;
    const book = books.filter((b) => b.id === id)[0];
    let response = null;

    if (book !== undefined) {
      response = h.response({
        status: ResponseStatus.success,
        data: {
          book,
        },
      });

      return response;
    }

    response = h.response({
      status: ResponseStatus.fail,
      message: ResponseMessage.bookNotFound,
    })
      .code(404);

    return response;
  };

  static updateBookByIdHandler = (request, h) => {
    const { id } = request.params;
    const {
      name, year, author, summary, publisher, pageCount, readPage, reading,
    } = request.payload;
    const index = books.findIndex((book) => book.id === id);

    let response = null;

    if (index !== -1) {
      if (name === undefined) {
        response = h.response({
          status: ResponseStatus.fail,
          message: ResponseMessage.updateBookWithoutNameBody,
        })
          .code(400);

        return response;
      }

      if (readPage > pageCount) {
        response = h.response({
          status: ResponseStatus.fail,
          message: ResponseMessage.updateBookWithReadPageGraterThanPageCount,
        })
          .code(400);

        return response;
      }

      const updatedAt = new Date().toISOString();
      const finished = readPage === pageCount;

      books[index] = {
        ...books[index],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        updatedAt,
      };

      response = h.response({
        status: ResponseStatus.success,
        message: ResponseMessage.updateBookSuccessfully,
      });

      return response;
    }

    response = h.response({
      status: ResponseStatus.fail,
      message: ResponseMessage.updateBookWhenIdNotFound,
    })
      .code(404);
    return response;
  };
}

module.exports = Handler;
