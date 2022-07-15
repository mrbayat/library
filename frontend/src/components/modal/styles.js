import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    height: 'auto',
    backgroundColor: theme.palette.color.colorModal,
    borderColor: theme.palette.color.borderModal,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    margin: 'auto',
    padding: 10,
    '&:focus': {
      outline: 'none',
    },
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  gridTitle: {
    height: 50,
    borderBottom: '1px solid #9e9e9e',
    display : 'flex' ,
    alignItems : 'center'
  },
  gridBottom: {
    borderTop: '1px solid #9e9e9e',
    marginTop: 12,
    paddingTop: 12 ,
  },
  gridChildren: {
    marginTop: 20,
  }
}))
