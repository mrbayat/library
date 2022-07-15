import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { connect } from 'react-redux'
import {
    bookSaveAction
} from '../../appRedux/actions/library'
import Modal from '../../components/modal'

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <Modal
            saveClick={() => props.bookSaveAction({
                title, description
            })}
        >
            <TextField
                value={title}
                fullWidth
                variant="outlined"
                label="نام کتاب"
                size="small"
                required
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginBottom: 10 }}
            />
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                variant="outlined"
                label={"توضیحات "}
                size="small"
                required
            />
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bookSaveAction: (data) => dispatch(bookSaveAction(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)