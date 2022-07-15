import React, { useState } from 'react'
import { connect } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import {
    customerLoginAction
} from '../../appRedux/actions/customer'

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                ورود به اپلیکیشن
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="نام کاربری"
                    name="username"
                    autoFocus
                />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="رمز عبور"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <LoadingButton
                    loading={props.loadingBtn}
                    onClick={() => props.customerLoginAction({ username, password })}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    ورود
                </LoadingButton>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        loadingBtn: state.common.loadingBtn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        customerLoginAction: (data) => dispatch(customerLoginAction(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)