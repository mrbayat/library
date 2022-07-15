
const createToken = (token) =>
    localStorage.setItem('token', token)

const getToken = () => {
    let data = localStorage.getItem('token')
    if (data !== '' && data !== null && data !== undefined) {
        return data
    }
    else {
        return ""
    }
}

const deleteToken = () => localStorage.removeItem('token')

export {
    getToken,
    createToken,
    deleteToken,
}