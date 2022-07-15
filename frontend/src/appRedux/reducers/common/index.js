import {
    LOADING_BTN,
    SNACKBAR,
    SET_TBL_DATA,
    DIALOG,
    MODAL,
    REDIRECT,
    LOADING_BACKDROP,
    PAGING_DEFAULT
} from '../../../constants/actionTypes'

const initState = {
    toastMessage: '',
    loadingBtn: false,
    toastStatus: false,
    loadingBackdrop: true,
    tblLoading: true,
    tblCount: 0,
    pageSize: 10,
    paging: 1,
    modal: false,
    isPaging: true,
    tblData: [],
    dialog: false,
    dialogFunc: false,
}

const commonReducer = (state = initState, action) => {
    switch (action.type) {
        case LOADING_BTN:
            return { ...state, loadingBtn: action.payload }
        case SET_TBL_DATA:
            let newData = state.tblData
            newData = newData.concat(action.payload)
            state.tblData.push(action.payload)
            return {
                ...state,
                paging: state.paging + 1,
                tblData: newData,
                tblCount: action.totalCount,
                tblLoading: false,
                isPaging: action.payload.length === state.pageSize ? true : false,
            }
        case SNACKBAR:
            return {
                ...state,
                toastStatus: action.payload.status,
                toastMessage: action.payload.message
            }
        case PAGING_DEFAULT:
            return {
                ...state,
                paging: 1 ,
                tblData : []
            }
        case MODAL:
            return {
                ...state,
                modal: action.payload,
            }
        case LOADING_BACKDROP:
            return {
                ...state,
                loadingBackdrop: action.payload,
            }
        case REDIRECT:
            return { ...state, redirect: action.payload }
        case DIALOG:
            let dialog = action.payload.dialog
            let dialogFunc = action.payload.dialogFunc
            if (dialog)
                return {
                    ...state,
                    dialog,
                    dialogFunc,
                }
            else
                return {
                    ...state,
                    dialog,
                    dialogFunc: false,
                }
        default: return state
    }
}

export default commonReducer
