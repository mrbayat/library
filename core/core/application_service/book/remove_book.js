'use strict'

module.exports = async ({ book_id }, { bookRepository }) => {
    let result = await bookRepository.removeBook({ book_id })
    return result
}