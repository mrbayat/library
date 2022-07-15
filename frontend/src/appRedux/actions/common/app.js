import { loadingBackdropAction, redirectAction } from '../../actions/common'
import { customerTokenAction } from '../../actions/customer'
import { HOME } from '../../../constants/router'

export const appAction = () => async (dispatch, getState) => {
    dispatch(loadingBackdropAction(true))
    await dispatch(customerTokenAction())
    let loginStatus = getState().config.loginStatus
    if (!loginStatus) {
          dispatch(redirectAction(HOME))
    }
    dispatch(loadingBackdropAction(false))
}