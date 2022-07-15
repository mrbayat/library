'use strict'

const Book = require('../../domain/book/entity')

module.exports = async ({ title, description, customer_id }, { bookRepository }) => {
    let book = Book.create({ title, description, customer_id })
    let bookToJson = book.toJSON()
    let result = await bookRepository.persist(bookToJson)
    return result
}