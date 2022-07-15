'use strict'

const Customer = require('../../domain/customer/entity')
const enumEntity = require('../../domain/customer/enum')

module.exports = async ({ token }, { cacheStorage }) => {
    let key = enumEntity.cahceKey.token + token
    let customerByCache = await cacheStorage.getKey(key)
    if (customerByCache != null) {
        customerByCache = JSON.parse(customerByCache)
        return customerByCache
    } else {
        return new Customer({})
    }
}