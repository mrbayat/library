const define = require('node-constants')(exports)

define({
  customer: {
    customerLogin: '/v1/customer_login',
    customerLogout: '/v1/customer_logout',
    customerToken: '/v1/customer_token'
  },
  book: {
    bookById: '/v1/book_by_id',
    bookList: '/v1/book_list',
    bookAdd: '/v1/book_add',
    bookUpdate: '/v1/book_update',
    bookDelete: '/v1/book_delete'
  }
})