class ResponseMessage {
  static addingBookWithoutNameBody = 'Gagal menambahkan buku. Mohon isi nama buku';

  static addingBookWithReadPageGraterThanPageCount = 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount';

  static addingBookSuccessfully = 'Buku berhasil ditambahkan';

  static addingBookUnsuccessfully = 'Buku gagal ditambahkan';
}

module.exports = ResponseMessage;
