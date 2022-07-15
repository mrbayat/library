'use strict'

const mongoose = require('../../orm/mongoose')
const { ObjectId } = require('mongodb')
const model = require('../../orm/mongoose/models/book')
const Book = require('../../../domain/book/entity')
const BookRepository = require('../../../domain/book/data/book_repository')

module.exports = class extends BookRepository {
    constructor() {
        super()
        this.db = mongoose
        this.model = model
    }

    async persist(bookEntity) {
        try {
            const { title, description, customer_id } = bookEntity
            const seqBook = await this.model.create({ title, description, customer_id })
            return new Book({ book_id: seqBook._id, title, description, customer_id })
        } catch (error) {
            throw new Error(error)
        }
    }

    async bookList({ offset, pagesize }) {
        try {
            const seqBooks = await this.model.aggregate([{
                $facet: {
                    totalData: [
                        { $sort: { title: 1 } },
                        { $skip: offset },
                        { $limit: pagesize },
                        {
                            $project: {
                                book_id: '$_id',
                                title: 1,
                                description: 1,
                                customer_id: { $ifNull: ['$customer_id', ''] }
                            }
                        }
                    ],
                    totalCount: [{ $group: { _id: null, count: { $sum: 1 } } }]
                }
            }]);

            return seqBooks
        } catch (error) {
            throw new Error(error)
        }
    }

    async bookById({ book_id }) {
        try {
            const seqBook = await this.model.findOne({ _id: ObjectId(book_id) });
            return seqBook === null ? new Book({}) : new Book({
                book_id: seqBook._id,
                title: seqBook.title,
                description: seqBook.description,
                customer_id: seqBook.customer_id
            });
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateBook(bookEntity) {
        try {
            const { book_id, title, description, customer_id } = bookEntity
            const seqBook = await this.model.findOne({ _id: ObjectId(book_id) });
            if (seqBook) {
                await seqBook.updateOne({ title, description, customer_id });
                return { book_id: seqBook._id, title, description, customer_id }
            } else {
                return new Book({})
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    async removeBook({ book_id }) {
        try {
            const seqBook = await this.model.findOne({ _id: ObjectId(book_id) });
            if (seqBook) {
                await seqBook.delete({ _id: ObjectId(book_id) });
                return new Book({
                    book_id: seqBook._id,
                    title: seqBook.title,
                    description: seqBook.description,
                    customer_id: seqBook.customer_id
                })
            } else {
                return new Book({})
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}

