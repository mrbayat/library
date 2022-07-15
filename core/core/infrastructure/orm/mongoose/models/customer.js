const mongoose = require('mongoose'),
  Schema = mongoose.Schema
const md5 = require('md5')

const CustomerSchema = new Schema({
  username: {
    type: String,
    maxlength: 50,
    index: true,
    required: true
  },
  password: {
    type: String,
    maxlength: 50,
    required: true
  },
  first_name: {
    type: String,
    maxlength: 50
  },
  last_name: {
    type: String,
    maxlength: 50
  }
}, { collection: 'customer' });

const collections = mongoose.model('customer', CustomerSchema)


collections
  .findOne({
    username: "admin1",
  })
  .then((admin) => {
    if (admin === null) {
      collections.create({
        username: "admin1",
        password: md5("123456"),
        first_name: "admin1",
        last_name: "admin1"
      })
        .then((ans) => {
        })
        .catch((err) => {
        });
    }
  })
  .catch((err) => {
  });

  collections
  .findOne({
    username: "admin2",
  })
  .then((admin) => {
    if (admin === null) {
      collections.create({
        username: "admin2",
        password: md5("123456"),
        first_name: "admin2",
        last_name: "admin2"
      })
        .then((ans) => {
        })
        .catch((err) => {
        });
    }
  })
  .catch((err) => {
  });

module.exports = collections