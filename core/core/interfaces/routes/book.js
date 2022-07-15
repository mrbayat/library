const bookController = require('../controllers/book_controller')
const httpStatusCode = require('../httpResponse/httpStatusCode')

let book = module.exports = {}

book.create = async (req, res) => {
    try {
        let data = await bookController.createBook(req.body)
        httpResponse({ res, ...new Api200(), data })
    } catch (error) {
        httpResponse({ res, ...new Api500Error() })
    }
}

book.list = async (req, res) => {
    try {
        let { data, count, pagesize } = await bookController.listBook(req.headers)
        httpResponse({ res, ...new Api200(), data, count, pagesize })
    } catch (error) {
        httpResponse({ res, ...new Api500Error() })
    }
}

book.update = async (req, res) => {
    try {
        let data = await bookController.updateBook(req.body)
        if (data.book_id === null) {
            httpResponse({ res, ...Api200.newResponse(MESSAGE.default_message.notfoundData, httpStatusCode.SUCCESS_ERROR) })
        } else {
            httpResponse({ res, ...new Api200(), data })
        }
    } catch (error) {
        httpResponse({ res, ...new Api500Error() })
    }
}

book.remove = async (req, res) => {
    try {
        let data = await bookController.removeBook(req.body)
        if (data.book_id === null) {
            httpResponse({ res, ...Api200.newResponse(MESSAGE.default_message.notfoundData, httpStatusCode.SUCCESS_ERROR) })
        } else {
            httpResponse({ res, ...new Api200(), data })
        }
    } catch (error) {
        httpResponse({ res, ...new Api500Error() })
    }
}

book.byId = async (req, res) => {
    try {
        let data = await bookController.bookById(req.body)
        if (data.book_id === null) {
            httpResponse({ res, ...Api200.newResponse(MESSAGE.default_message.notfoundData, httpStatusCode.SUCCESS_ERROR) })
        } else {
            httpResponse({ res, ...new Api200(), data })
        }
    } catch (error) {
        httpResponse({ res, ...new Api500Error() })
    }
}