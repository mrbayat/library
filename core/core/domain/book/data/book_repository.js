'use strict'

module.exports = class {
  persist(domainBook) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  removeBook({ book_id }) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  updateBook(domainBook) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  bookList() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }

  bookById({ book_id }) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED')
  }
}