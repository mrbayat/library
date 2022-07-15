'use strict'

const enumEntity = require('../../domain/customer/enum')

module.exports = async ({ token }, { cacheStorage }) => {
    let key = enumEntity.cahceKey.token + token
    await cacheStorage.removeKey(key)
    return true
}