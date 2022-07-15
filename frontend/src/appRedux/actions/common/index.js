import {
    SNACKBAR,
    LOADING_BTN,
    TBL_LOADING,
    SET_TBL_DATA,
    LOADING_BACKDROP,
    DIALOG,
    MODAL ,
    REDIRECT,
    PAGING_DEFAULT
} from '../../../constants/actionTypes'

export const snackbarAction = (status = false, message = '') => (dispatch) => {
    dispatch({ type: SNACKBAR, payload: { status, message } })
}

export const redirectAction = (payload) => (dispatch) => dispatch({ type: REDIRECT, payload })

export const loadingBtnAction = (payload) => (dispatch) => dispatch({ type: LOADING_BTN, payload })

export const loadingBackdropAction = (payload) => (dispatch) => dispatch({ type: LOADING_BACKDROP, payload })

export const tblLoadingAction = (payload) => (dispatch) => dispatch({ type: TBL_LOADING, payload })

export const pagingDefaultAction = () => (dispatch) => dispatch({ type: PAGING_DEFAULT })

export const tblDataAction = ({ payload, totalCount }) => (dispatch) => dispatch({ type: SET_TBL_DATA, payload, totalCount })

export const dialogAction = (dialog = false, dialogFunc = false) =>
    (dispatch) => dispatch({ type: DIALOG, payload: { dialog, dialogFunc } })

export const modalAction = (payload) => (dispatch) => dispatch({ type: MODAL, payload })
