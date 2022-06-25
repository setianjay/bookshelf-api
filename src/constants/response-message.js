class ResponseMessage {
  static addingBookUnsuccessfully = 'Buku gagal ditambahkan';

  static addingBookSuccessfully = 'Buku berhasil ditambahkan';

  static addingBookWithoutNameBody = 'Gagal menambahkan buku. Mohon isi nama buku';

  static addingBookWithReadPageGraterThanPageCount = 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount';

  static bookNotFound = 'Buku tidak ditemukan';

  static deleteBookUnsuccessfully = 'Buku gagal dihapus. Id tidak ditemukan';

  static deleteBookSuccessfully = 'Buku berhasil dihapus';

  static updateBookSuccessfully = 'Buku berhasil diperbarui';

  static updateBookWhenIdNotFound = 'Gagal memperbarui buku. Id tidak ditemukan';

  static updateBookWithoutNameBody = 'Gagal memperbarui buku. Mohon isi nama buku';

  static updateBookWithReadPageGraterThanPageCount = 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount';
}

module.exports = ResponseMessage;
