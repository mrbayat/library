const CustomerService = require('../../application_service/customer')
const serviceLocator = require('../../infrastructure/config/service-locator')

module.exports = {
    async customerLogin(body) {
        const { username, password } = body
        const customer = await CustomerService.CustomerLogin({ username, password }, serviceLocator)
        return serviceLocator.customerSerializer.serialize(customer)
    },

    async customerLogout(headers) {
        const token = headers.token
        await CustomerService.CustomerLogout({ token }, serviceLocator)
        return serviceLocator.customerSerializer.serialize([])
    },

    async customerToken(headers) {
        const token = headers.token || ''
        const customer = await CustomerService.CustomerToken({ token }, serviceLocator)
        return serviceLocator.customerSerializer.serialize(customer)
    }
}