'use strict'

const _serializeCustomer = (customer) => {
    return {
        'token': customer.token,
        'customer_id': customer.customer_id,
        'first_name': customer.first_name,
        'last_name': customer.last_name
    }
}

module.exports = class {
    serialize(data) {
        if (!data) {
            throw new Error('Expect data to be not undefined nor null')
        }
        if (Array.isArray(data)) {
            return data.map(_serializeCustomer)
        }
        return _serializeCustomer(data)
    }
}