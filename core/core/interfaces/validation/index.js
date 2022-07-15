const customer = require('./customer')
const book = require('./book')

exports.execute = () => {
    return {
        ...customer,
        ...book
    }
}