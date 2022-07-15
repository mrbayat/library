const httpStatusCode = require('./httpStatusCode')
const BaseError = require('./baseHttpRequest')

class Api500Error extends BaseError {
    constructor(
        message = MESSAGE.default_message.error,
        statusCode = httpStatusCode.INTERNAL_SERVER,
        success = httpStatusCode.SUCCESS_ERROR
    ) {
        super(message, statusCode, success)
    }
}

module.exports = Api500Error