import React from 'react'
import { Grid, Modal as ModalComponent, Typography, Button, ButtonGroup } from '@mui/material'
import { Save, Close } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton';
import { connect } from 'react-redux'
import { modalAction } from '../../appRedux/actions/common';

function Modal(props) {

  const onCloseFunc = () => {
    props.modalAction(false)
  }

  const btnHandleFunc = () => {
    return (
      <ButtonGroup fullWidth>
        <Button
          startIcon={<Close />}
          onClick={() => onCloseFunc()}
          size="medium"
          color="secondary"
          variant="contained">
          بستن
        </Button>
        <LoadingButton
          loading={props.loadingBtn}
          startIcon={<Save />}
          size="medium"
          color="primary"
          variant="contained"
          onClick={() => props.saveClick()}
        >
          ذخیره
        </LoadingButton>
      </ButtonGroup>
    )
  }

  return (
    <ModalComponent
      aria-labelledby="modal-global-title"
      aria-describedby="modal-global-description"
      open={props.modal}
      BackdropProps={{
        timeout: 200,
      }}
      style={{
        marginTop: 100
      }}
    >
      <Grid style={{
        height: 'auto',
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        padding: 10,
        maxWidth: 450,
        '&:focus': {
          outline: 'none',
        },
      }}>
        <Grid style={{
          height: 50,
          borderBottom: '1px solid #9e9e9e',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Typography variant="h5">
            ثبت کتاب
          </Typography>
        </Grid>
        <Grid style={{
          borderTop: '1px solid #9e9e9e',
          marginTop: 12,
          paddingTop: 12,
        }}>
          {props.children}
        </Grid>
        {btnHandleFunc()}
      </Grid>
    </ModalComponent>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.common.modal,
    loadingBtn: state.common.loadingBtn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalAction: (status) => dispatch(modalAction(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
