import React from 'react'
import { Close } from '@mui/icons-material'
import { Snackbar } from '@mui/material'
import { connect } from 'react-redux'
import * as common from '../../appRedux/actions/common'
import config from '../../util/config'

function SnackbarComponent(props) {

    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={props.toastStatus}
            autoHideDuration={config.snackbarAutoHideDuration}
            onClose={() => props.snackbarAction()}
            message={props.toastMessage}
            action={
                <Close onClick={() => props.snackbarAction()} />
            }
        />
    )
}

const mapStateToProps = (state) => {
    return {
        toastStatus: state.common.toastStatus,
        toastMessage: state.common.toastMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        snackbarAction: (status = false, message = '') => dispatch(common.snackbarAction(status, message)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarComponent)
