const httpStatusCode = require('./httpStatusCode')
const BaseHttpRequest = require('./baseHttpRequest')

class Api200 extends BaseHttpRequest {
    constructor(
        message = MESSAGE.default_message.success,
        statusCode = httpStatusCode.OK,
        success = httpStatusCode.SUCCESS_OK
    ) {
        super(message, statusCode, success)
    }

    static newResponse(message = MESSAGE.default_message.success, statusCode = httpStatusCode.OK) {
        return new Api200(message, httpStatusCode.OK , statusCode)
    }
}

module.exports = Api200