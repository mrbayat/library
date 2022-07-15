'use strict'
const ValueObject = require('../../common/valueObject')

module.exports = class Book {
    constructor({ book_id = null, title = '', description = '', customer_id = '' }) {
        this.book_id = book_id
        this.title = title
        this.description = description
        this.customer_id = customer_id
    }

    static create({ book_id = null, title, description, customer_id }) {
        return new Book(
            {
                book_id,
                customer_id,
                title: new ValueObject.Title(title),
                description: new ValueObject.Description(description)
            }
        )
    }

    static update({ book_id = null, title, description, customer_id }) {
        return new Book(
            {
                book_id,
                customer_id,
                title: new ValueObject.Title(title),
                description: new ValueObject.Description(description)
            }
        )
    }

    toJSON() {
        return {
            book_id: this.book_id,
            customer_id: this.customer_id,
            title: this.title.value,
            description: this.description.value
        }
    }
}