'use strict'
const Serializer = require('../../interfaces/serializers')
const CacheRedis = require('../cache/redis')
const constants = require('../constants/constants')

function buildBeans() {
  const beans = {
    cacheStorage: new CacheRedis(),
    customerSerializer: new Serializer.CustomerSerializer,
    bookSerializer: new Serializer.BookSerializer
  }

  switch (process.env.SUPPORTED_DATABASE) {
    case constants.db.mysql:
      break;
    case constants.db.mongo:
      const CustomerRepositoryMongo = require('../repositories/customer/customer_repository_mongo')
      beans.customerRepository = new CustomerRepositoryMongo()

      const BookRepositoryMongo = require('../repositories/book/book_repository_mongo')
      beans.bookRepository = new BookRepositoryMongo()

      break;
    default:
      break;
  }
  return beans
}

module.exports = buildBeans()
