import {
    BOOK_ADD,
    BOOK_BY_ID,
    BOOK_DELETE,
    BOOK_LIST,
    BOOK_UPDATE
} from '../../constants/api'
import callApi from '../http'

const bookList = async (paging) => await callApi(BOOK_LIST, {}, { paging })

const bookDelete = async (body) => await callApi(BOOK_DELETE, body)

const bookById = async (body) => await callApi(BOOK_BY_ID, body)


const bookSave = async (body) =>
    await callApi(body.book_id === undefined ? BOOK_ADD : BOOK_UPDATE, body)

export {
    bookList,
    bookDelete,
    bookById,
    bookSave,
}