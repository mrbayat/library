const config = require('config')
const validationApi = require('../validation')

module.exports = (req, res, next) => {
    let url = getSchemaName(req.baseUrl)
    let schema = validationApi.execute()
    let checkValidationServiceData = validationServiceData(url, schema, req)
    if (checkValidationServiceData.status) {
        next()
    } else {
        httpResponse({ res, ...checkValidationServiceData.errorCode })
    }
}

const validationServiceData = (url, schema, req) => {
    let data = {
        status: true,
        errorCode: null
    }
    if (validationSchema(url, schema)) {
        if (validationData(req.body, schema[url])) {
            return data
        } else {
            data.status = false
            data.errorCode = new Api400Error()
            return data
        }
    } else {
        data.status = false
        data.errorCode = new Api404Error()
        return data
    }
}

const validationSchema = (url, schema) =>
    typeof schema[url] !== 'undefined' ? true : false

const validationData = (data, schema) => {
    let status = schema.validate(data)
    if (typeof status.value !== 'undefined' && typeof status.error === 'undefined') return true
    return false
}

const getSchemaName = (baseUrl) => {
    baseUrl = replaceBaseUrl(baseUrl)
    baseUrl = splitBaseUrl(baseUrl)
    baseUrl = baseUrl.filter((a) => a)
    if (Array.isArray(baseUrl) && baseUrl.length >= 2) {
        return baseUrl[0] + '.' + baseUrl[1]
    } else {
        return ""
    }
}

const splitBaseUrl = (baseUrl) => baseUrl.split('/')

const replaceBaseUrl = (baseUrl) => baseUrl.replace(config.serviceBaseUrl, '')