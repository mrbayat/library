const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const BookSchema = new Schema({
  title: {
    type: String,
    maxlength: 50,
    index: true,
    required: true
  },
  description: {
    type: String,
    maxlength: 250
  },
  customer_id: {
    type: String
  }
}, { collection: 'book' })

module.exports = mongoose.model('book', BookSchema)