const express = require('express')
const router = express.Router()
const api = require("./api")

const customer = require('./customer')
const book = require('./book')

router
  .post(api.customer.customerLogin, customer.login)
  .post(api.customer.customerLogout, customer.logout)
  .post(api.customer.customerToken, customer.check_token)

  .post(api.book.bookList, book.list)
  .post(api.book.bookAdd, book.create)
  .post(api.book.bookById, book.byId)
  .post(api.book.bookUpdate, book.update)
  .post(api.book.bookDelete, book.remove)

module.exports = router