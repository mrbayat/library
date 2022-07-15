const httpStatusCode = require('./httpStatusCode')
const BaseHttpRequest = require('./baseHttpRequest')

class Api400Error extends BaseHttpRequest {
    constructor(
        message = MESSAGE.default_message.check_inputs,
        statusCode = httpStatusCode.BAD_REQUEST,
        success = httpStatusCode.SUCCESS_ERROR
    ) {
        super(message, statusCode , success)
    }
}

module.exports = Api400Error