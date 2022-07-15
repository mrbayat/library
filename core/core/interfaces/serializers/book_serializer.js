'use strict'

const _serializeBook = (book) => {
    return {
        'book_id': book.book_id,
        'title': book.title,
        'description': book.description,
        'customer_id': book.customer_id
    }
}

module.exports = class {
    serialize(data) {
        if (!data) {
            throw new Error('Expect data to be not undefined nor null')
        }
        if (Array.isArray(data)) {
            return data.map(_serializeBook)
        }
        return _serializeBook(data)
    }

    serializeList({ books }) {
        if (!books) {
            throw new Error('Expect data to be not undefined nor null')
        }

        let count = books[0]['totalData'].length > 0 ? books[0]['totalCount'][0].count : 0
        let data = books[0]['totalData'].length > 0 ? books[0]['totalData'] : []

        if (Array.isArray(data)) {
            data = data.map(_serializeBook)
        }
        return { data, count }
    }
}