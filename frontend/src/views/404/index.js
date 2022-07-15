import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@mui/material'

function NotFound(props) {

    return (
        <React.Fragment>
            <Typography variant='h1'>
                404
            </Typography>
        </React.Fragment >
    )
}

export default connect()(NotFound)
