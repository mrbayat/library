const httpStatusCode = require('./httpStatusCode')
const BaseError = require('./baseHttpRequest')

class Api404Error extends BaseError {
    constructor(
        message = MESSAGE.default_message.notfound,
        statusCode = httpStatusCode.NOT_FOUND,
        success = httpStatusCode.SUCCESS_ERROR
    ) {
        super(message, statusCode, success)
    }
}

module.exports = Api404Error