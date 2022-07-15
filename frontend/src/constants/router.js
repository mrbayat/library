import Home from '../views/home'
import Login from '../views/login'
import ViewBook from '../views/view_book'
import NotFound from '../views/404'

export const HOME = '/'
export const NOT_FOUND = '*'
export const LOGIN = '/login'
export const VIEW_BOOK = '/view-book/:id'

const routerList = [
    { router: HOME, page: <Home /> },
    { router: LOGIN, page: <Login /> },
    { router: VIEW_BOOK, page: <ViewBook /> },
    { router: NOT_FOUND, page: <NotFound /> },
]

export default routerList