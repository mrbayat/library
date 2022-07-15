import {
    bookById,
    bookDelete,
    bookList,
    bookSave,
} from '../../../api/library'
import {
    tblDataAction,
    tblLoadingAction,
    loadingBtnAction,
    dialogAction,
    modalAction ,
    pagingDefaultAction,
} from '../../actions/common'


export const bookListAction = () => async (dispatch, getState) => {
    dispatch(tblLoadingAction(true))
    let paging = getState().common.paging
    let result = await bookList(paging)
    dispatch(tblDataAction({ payload: result.data, totalCount: result.totalCount }))
}

export const bookByIdAction = (book_id) => async (dispatch) => {
    let result = await bookById({ book_id })
    if (result.status) {
        return result.data[0]
    } else {
        return null
    }
}

export const bookDeleteAction = (params) => async (dispatch) => {
    let data = { book_id: params.book_id }
    dispatch(loadingBtnAction(true))
    let result = await bookDelete(data)
    if (result.status) {
        dispatch(pagingDefaultAction())
        dispatch(dialogAction())
        dispatch(bookListAction())
    }
    dispatch(loadingBtnAction(false))
}

export const bookSaveAction = (data) => async (dispatch, getState) => {
    data.customer_id = getState().config.customer_id
    if (data.title !== '' && data.description !== '') {
        dispatch(loadingBtnAction(true))
        let result = await bookSave(data)
        if (result.status) {
            dispatch(modalAction(false))
            dispatch(pagingDefaultAction())
            dispatch(bookListAction())
        }
        dispatch(loadingBtnAction(false))
    }
}