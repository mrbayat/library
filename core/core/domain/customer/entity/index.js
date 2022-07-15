'use strict'
const ValueObject = require('../../common/valueObject')
const md5 = require('md5')

module.exports = class Customer {
    constructor({ customer_id = null, username = '', password = '', first_name = '', last_name = '',
        token = '' }) {
        this.customer_id = customer_id
        this.username = username
        this.password = password
        this.first_name = first_name
        this.last_name = last_name
        this.token = token
    }

    static login({ username, password }) {
        password = md5(password)
        return new Customer(
            {
                username: new ValueObject.Username(username),
                password: new ValueObject.Password(password),
                token: (Math.floor(Math.random() * 90000) + 10000).toString() + '-' +
                    (Math.floor(Math.random() * 90000) + 10000).toString() + '-' +
                    (Math.floor(Math.random() * 90000) + 10000).toString() + '-' +
                    (Math.floor(Math.random() * 90000) + 10000).toString()
            }
        )
    }

    toJSON() {
        return {
            customer_id: this.customer_id,
            username: this.username.value,
            password: this.password.value,
            first_name: this.first_name,
            last_name: this.last_name,
            token: this.token
        }
    }
}