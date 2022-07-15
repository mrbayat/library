import {
    CUSTOMER_TOKEN,
    LOGIN,
    LOGOUT
} from '../../constants/api'
import callApi from '../http'

const customerLogin = async (body) => await callApi(LOGIN, body)

const customerLogout = async (body) => await callApi(LOGOUT, body)

const customerToken = async (body) => await callApi(CUSTOMER_TOKEN, body)

export {
    customerLogin,
    customerLogout ,
    customerToken
}