const isObject = require('is-object')
const httpStatusCode = require('./httpStatusCode')

const httpResponse = ({
    message = MESSAGE.default_message.success,
    statusCode = httpStatusCode.OK,
    data,
    success,
    res,
    count = '-',
    pagesize = '-' }) => {

    let settings = { success, message }
    if (count != '-') settings.count = count
    if (pagesize != '-') settings.pagesize = Number(pagesize)

    res.status(statusCode).send({
        settings,
        data: validateData(data)
    })
}

const validateData = (data) => {
    if (typeof data === 'undefined' || data === null || data === '') return []
    else if (Array.isArray(data)) return data
    else if (isObject(data)) {
        return [data]
    } else {
        return []
    }
}

module.exports = httpResponse