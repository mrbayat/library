import * as actionTypes from '../../../constants/actionTypes'

const initState = {
    loginStatus: false,
    customer_id: null
}

const configReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                loginStatus: true,
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                loginStatus: false,
            }
        case actionTypes.LOGIN_FIELD:
            return {
                ...state,
                loginStatus: action.payload.loginStatus,
                customer_id: action.payload.customer_id,
            }
        default:
            return state
    }
}

export default configReducer
