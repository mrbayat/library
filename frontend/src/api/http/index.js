import axios from 'axios'

const callApi = async (serviceName, body, headers = {}) => {
    let url = getHttpRequestUrl(serviceName)

    try {
        let response = await axios.post(url, body, { headers })
        console.log("*******************************" , JSON.stringify(response))
        return getHttpResponseSuccess(response)
    } catch (error) {
        return {
            status: false,
            message: "مشکلی رخ داده است",
            data: [],
            errorCode: 0
        }
    }
}

const getHttpRequestUrl = (serviceName) => {
    return process.env.REACT_APP_API_URL + serviceName
}

const getHttpResponseSuccess = (response) => {
    if (typeof response !== 'undefined' && typeof response.data !== 'undefined') {
        response = response.data
        let data = response.data || []
        let message = response.settings.message || ''
        let status = response.settings.success
        let totalCount = response.settings.totalCount || 0

        return {
            status: parseInt(status) === 1 ? true : false,
            errorCode: response.settings.success,
            data,
            message,
            totalCount
        }
    } else return {
        status: false,
        errorCode: 0,
        message: "مشکلی رخ داده است",
        data: [],
        totalCount: 0
    }
}

export default callApi