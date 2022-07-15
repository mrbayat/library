import React, { useEffect, useState } from 'react'
import { TextField, Grid, Typography, Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { Save } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NotesIcon from '@mui/icons-material/Notes';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  redirectAction
} from '../../appRedux/actions/common';
import {
  bookByIdAction,
  bookSaveAction
} from '../../appRedux/actions/library';
import { HOME } from '../../constants/router';

function Form(props) {
  const [result, setResult] = useState({
    description: '',
    title: ''
  })
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  let { id } = useParams()

  useEffect(() => {
    getBookData()
  }, []);

  const getBookData = async () => {
    let result = await props.bookByIdAction(id)
    if (result !== null) {
      setResult(result)
      setTitle(result.title)
      setDescription(result.description)
    }
  }

  return (
    <Grid container spacing={4} style={{ padding: 100 }}>
      <Grid item xs={6} md={6}>
        <List>
          <Typography variant='h5'>
            نمایش کتاب
          </Typography>
          <br />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AutoStoriesIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="نام کتاب" secondary={result.title} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <NotesIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="توضیحات" secondary={result.description} />
          </ListItem>
        </List>
        <Button onClick={() => props.redirectAction(HOME)}>
          بازگشت به خانه
        </Button>
      </Grid>
      <Grid item xs={6} md={6}>
        <Typography variant='h5'>
          ویرایش کتاب
        </Typography>
        <br />
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
        <LoadingButton
          loading={props.loadingBtn}
          startIcon={<Save />}
          size="medium"
          color="primary"
          variant="contained"
          onClick={() => props.bookSaveAction({ title, description, book_id: id })}
        >
          ذخیره
        </LoadingButton>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    loadingBtn: state.common.loadingBtn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookSaveAction: (data) => dispatch(bookSaveAction(data)),
    redirectAction: (link) => dispatch(redirectAction(link)),
    bookByIdAction: (id) => dispatch(bookByIdAction(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)