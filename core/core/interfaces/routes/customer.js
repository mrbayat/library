const customerController = require('../controllers/customer_controller')
const httpStatusCode = require('../httpResponse/httpStatusCode')

let customer = module.exports = {}

customer.login = async (req, res) => {
    try {
        let data = await customerController.customerLogin(req.body)
        if (data.customer_id === null) {
            httpResponse({ res, ...Api200.newResponse(MESSAGE.default_message.notfoundData, httpStatusCode.SUCCESS_ERROR) })
        } else {
            httpResponse({ res, ...new Api200(), data })
        }
    } catch (error) {
        httpResponse({ res, ...new Api500Error() })
    }
}

customer.logout = async (req, res) => {
    try {
        let data = await customerController.customerLogout(req.headers)
        httpResponse({ res, ...new Api200(), data })
    } catch (error) {
        httpResponse({ res, ...new Api500Error() })
    }
}

customer.check_token = async (req, res) => {
    try {
        let data = await customerController.customerToken(req.headers)
        if (data.customer_id === null) {
            httpResponse({ res, ...Api200.newResponse(MESSAGE.default_message.notfoundData, httpStatusCode.SUCCESS_ERROR) })
        } else {
            httpResponse({ res, ...new Api200(), data })
        }
    } catch (error) {
        httpResponse({ res, ...new Api500Error() })
    }
}