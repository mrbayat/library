const express = require('express'),
    compression = require('compression'),
    helmet = require('helmet'),
    config = require('config'),
    timeout = require('connect-timeout'),
    cors = require('cors'),
    bootstrap = require('../../infrastructure/config/bootstrap'),
    notfound = require('./404')

let baseUrl = config.serviceBaseUrl
let app = express()
app.use(cors())
app.use(require('./domain'))
app.use(require('./timeout'))
app.use(timeout('60s'))
app.use(compression())
app.use(helmet())
bootstrap.init()

const bodyParser = require('body-parser')
const authentication = require('./authentication')
const limiter = require('./limiter')
const routes = require('../routes')
const validationApi = require('./validation_api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(baseUrl + '*', limiter)
app.use(baseUrl + '*', authentication)
app.use(baseUrl + '*', validationApi)
app.use(baseUrl, routes)
app.use(notfound)

module.exports = app