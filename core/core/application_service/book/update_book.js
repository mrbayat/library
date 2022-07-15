'use strict'

const Book = require('../../domain/book/entity')

module.exports = async ({ book_id, title, description, customer_id }, { bookRepository }) => {
    let book = Book.update({ book_id, title, description, customer_id })
    let bookToJson = book.toJSON()
    let result = await bookRepository.updateBook(bookToJson)
    return result
}