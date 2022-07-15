import * as actionTypes from '../../../constants/actionTypes'
import {
    customerLogin,
    customerLogout,
    customerToken
} from '../../../api/customer'
import { deleteToken, createToken } from '../../../util/db';
import { redirectAction } from '../common';
import { HOME } from '../../../constants/router';

export const customerLoginAction = (data) => async (dispatch) => {
    if (data.username !== '' && data.password !== '') {
        let result = await customerLogin(data)
        if (result.status) {
            let customer = result.data[0];
            createToken(customer.token)
            dispatch(loginFieldAction({
                loginStatus: true,
                customer_id: customer.customer_id
            }))
            dispatch(redirectAction(HOME))
        }
    }
}

export const customerLogoutAction = () => async (dispatch) => {
    await customerLogout()
    dispatch(redirectAction(HOME))
    deleteToken()
    dispatch(loginFieldAction({
        loginStatus: false,
        customer_id: null
    }))
}

export const loginFieldAction = (payload) =>
    (dispatch) => dispatch({ type: actionTypes.LOGIN_FIELD, payload })

export const customerTokenAction = () => async (dispatch) => {
    let result = await customerToken()
    if (result.status) {
        let customer = result.data[0];
        dispatch(loginFieldAction({
            loginStatus: true,
            customer_id: customer.customer_id
        }))
    }
}