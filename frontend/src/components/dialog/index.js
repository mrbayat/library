import React from 'react'
import {
  DialogContent,
  Grid,
  Dialog,
  Button,
  DialogActions,
  Typography,
  Alert
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { Delete, Close } from '@mui/icons-material'
import { connect } from 'react-redux'
import { dialogAction } from '../../appRedux/actions/common'

function AlertDialog(props) {
  let message = "آیا اطمینان به حذف آیتم مورد نظر هستید ؟"
  let title = "حذف"
  let btnDisagree = "انصراف"
  let btnAgree = "مطمئن هستم"
  let icon = <Delete />

  return (
    <Dialog fullWidth open={props.dialog}>
      <Grid style={{
        margin: 15
      }}>
        <Typography variant="h4">
          {title}
        </Typography>
      </Grid>
      <DialogContent dividers>
        <Alert style={{
          fontWeight: 'bold'
        }} severity="error">{message}</Alert>
      </DialogContent>
      <DialogActions style={{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 18
      }}>
        <Button
          startIcon={<Close />}
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => props.dialogAction()}>
          {btnDisagree}
        </Button>
        {' '}
        <LoadingButton
          loading={props.loadingBtn}
          startIcon={icon}
          variant="contained"
          color="primary"
          size="small"
          onClick={() => props.dialogFunc()}>
          {btnAgree}
        </LoadingButton>
      </DialogActions>
    </Dialog >
  )
}

const mapStateToProps = (state) => {
  return {
    dialog: state.common.dialog,
    dialogFunc: state.common.dialogFunc,
    loadingBtn: state.common.loadingBtn,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dialogAction: () => dispatch(dialogAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog)
