'use strict'

const Customer = require('../../domain/customer/entity')
const enumEntity = require('../../domain/customer/enum')

module.exports = async ({ username, password }, { customerRepository, cacheStorage }) => {

    let customer = Customer.login({ username, password })
    let customerToJson = customer.toJSON()
    let customerByDb = await customerRepository.login(customerToJson)

    if (customerByDb.customer_id !== null) {
        customerByDb.token = customer.token

        await cacheStorage.setKey({
            key: enumEntity.cahceKey.token + customer.token,
            value: {
                customer_id: customerByDb.customer_id,
                first_name: customerByDb.first_name,
                last_name: customerByDb.last_name,
                token: customerByDb.token
            }
        })
    }
    return customerByDb
}