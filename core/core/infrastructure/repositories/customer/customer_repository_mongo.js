'use strict'

const mongoose = require('../../orm/mongoose')
const model = require('../../orm/mongoose/models/customer')
const Customer = require('../../../domain/customer/entity')
const CustomerRepository = require('../../../domain/customer/data/customer_repository')

module.exports = class extends CustomerRepository {
    constructor() {
        super()
        this.db = mongoose
        this.model = model
    }

    async login(customerEntity) {
        try {
            const { username, password } = customerEntity
            const seqCustomer = await this.model.findOne({ username, password });
            return seqCustomer === null ? new Customer({}) : new Customer({
                customer_id: seqCustomer._id,
                first_name: seqCustomer.first_name,
                last_name: seqCustomer.last_name
            });
        } catch (error) {
            throw new Error(error)
        }
    }
}

