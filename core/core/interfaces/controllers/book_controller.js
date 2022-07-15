const BookService = require('../../application_service/book')
const serviceLocator = require('../../infrastructure/config/service-locator')

module.exports = {
    async createBook(body) {
        const { title, description, customer_id } = body
        const book = await BookService.CreateBook({ title, description, customer_id }, serviceLocator)
        return serviceLocator.bookSerializer.serialize(book)
    },

    async updateBook(body) {
        const { book_id, title, description, customer_id } = body
        const book = await BookService.UpdateBook({ book_id, title, description, customer_id }, serviceLocator)
        return serviceLocator.bookSerializer.serialize(book)
    },

    async listBook(headers) {
        const paging = Number(headers['paging']) || CONSTANT.paging
        const pagesize = Number(headers['pagesize']) || CONSTANT.pagesize
        const offset = (paging - 1) * pagesize

        const books = await BookService.ListBook({ offset, pagesize }, serviceLocator)
        const { data, count } = serviceLocator.bookSerializer.serializeList({ books })
        return { data, count, pagesize }
    },

    async removeBook(body) {
        const { book_id } = body
        const book = await BookService.RemoveBook({ book_id }, serviceLocator)
        return serviceLocator.bookSerializer.serialize(book)
    },

    async bookById(body) {
        const { book_id } = body
        const book = await BookService.BookById({ book_id }, serviceLocator)
        return serviceLocator.bookSerializer.serialize(book)
    }
}
