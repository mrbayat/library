'use strict'

module.exports = async ({ book_id }, { bookRepository }) => {
    let result = await bookRepository.bookById({ book_id })
    return result
}