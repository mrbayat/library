const config = require('config')
const dbConfig = config.get('mongoConfig')
const mongoose = require('mongoose')

let host = process.env.MONGO_HOST
let port = process.env.MONGO_PORT
let user = process.env.MONGO_USER
let password = process.env.MONGO_PASSWORD

const getMongoDBConfig = () => {
  const username_password = (user != '' && password != '') ? (user + ':' + password + '@') : ''
  const url_port = host + (port != '' ? ':' + port : '')
  return dbConfig.perUrl + username_password + url_port + '/' + dbConfig.database
}

const mongoDB = getMongoDBConfig()
const db = mongoose.connect(mongoDB, dbConfig.options)

module.exports = db