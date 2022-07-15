'use strict'

module.exports = async ({ offset, pagesize }, { bookRepository }) => {
    let bookList = await bookRepository.bookList({ offset, pagesize })
    return bookList
}