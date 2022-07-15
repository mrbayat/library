const httpStatusCode = require('./httpStatusCode')
const BaseError = require('./baseHttpRequest')

class Api403Error extends BaseError {
    constructor(
        message = MESSAGE.default_message.authorized,
        statusCode = httpStatusCode.FORBIDDEN,
        success = httpStatusCode.SUCCESS_AUTH
    ) {
        super(message, statusCode, success)
    }
}

module.exports = Api403Error