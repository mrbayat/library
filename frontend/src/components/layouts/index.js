/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Route from '../../routes';
import Dialog from '../dialog';
import Backdrop from '../backdrop';
import { redirectAction } from '../../appRedux/actions/common';
import { customerLogoutAction } from '../../appRedux/actions/customer';
import { appAction } from '../../appRedux/actions/common/app';
import { LOGIN } from '../../constants/router';

function MenuAppBar(props) {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory()

  useEffect(() => {
    props.appAction()
  }, [])

  useEffect(() => {
    if (props.redirect !== null) {
      history.push(props.redirect)
      props.redirectAction(null)
    }
  }, [props.redirect])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    props.customerLogoutAction()
  };

  return (
    <React.Fragment>
      {!props.loadingBackdrop ?
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  کتابخانه قانون
                </Typography>
                {auth && (
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl()}
                    >
                      {props.loginStatus ?
                        <MenuItem onClick={handleClose}>خروج</MenuItem>
                        : <MenuItem onClick={() => props.redirectAction(LOGIN)}>ورود</MenuItem>
                      }

                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>
          </Box>
          <Route />
          <Dialog />
        </> :
        <Backdrop />}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    redirect: state.common.redirect,
    loadingBackdrop: state.common.loadingBackdrop,
    loginStatus: state.config.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appAction: () => dispatch(appAction()),
    redirectAction: (data) => dispatch(redirectAction(data)),
    customerLogoutAction: () => dispatch(customerLogoutAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar)
