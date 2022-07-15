class BaseError extends Error {
    constructor(message, statusCode , success) {
        super()
        Object.setPrototypeOf(this, new.target.prototype)
        this.message = message
        this.statusCode = statusCode
        this.success = success
        Error.captureStackTrace(this)
    }
}

module.exports = BaseError