class RequestPath {
  static books = '/books';

  static book = `${this.books}/{id}`;
}

module.exports = RequestPath;
