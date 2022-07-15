import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {  getToken } from './util/db';

function AxiosInterceptors(props) {

    axios.interceptors.request.use(request => {
        request.headers.pagesize = props.pageSize
        request.headers.token = getToken()
        return request
    }, error => { })

    axios.interceptors.response.use(response => {

        return response
    }, error => {

        return error
    })

    return (
        <></>
    )
}

const mapStateToProps = (state) => {
    return {
        pageSize: state.common.pageSize,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AxiosInterceptors)