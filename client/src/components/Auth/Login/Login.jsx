/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import {
  Grid, Paper, TextField, Button, Typography, Avatar
} from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { signUpUser } from '../../../redux/user.slice';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const paperStyle = {
    padding: 20, height: '60vh', width: 300, margin: "0 auto"
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3003/signin';
    dispatch(signUpUser({ url, form }));
    setForm({
      email: '',
      password: '',
    });
  };

  const navigateClick = async (googleToken) => {
    dispatch(signUpUser({
      url: 'http://localhost:3003/googlesignup',
      form: googleToken
    }));
  };
  const btnstyle = { margin: '8px 0' };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">

          <Avatar style={avatarStyle}><LockRoundedIcon /></Avatar>
          <h2>Войти</h2>
          <Typography variant="caption" gutterBottom>Пожалуйста, войдите в свою учетную запись !</Typography>
        </Grid>
        <form onSubmit={(e) => handleSubmit(e)}>

          <TextField fullWidth label="Email" name="email" placeholder="Введите свой email" value={form?.email} onChange={handleInput} />
          <TextField fullWidth label="Пароль" name="password" placeholder="Введите пароль" value={form?.password} onChange={handleInput} />
          <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Вход</Button>
        </form>

        <Typography>
          Есть аккаунт в Google?
        </Typography>
        <Typography>
          <GoogleLogin
            size="large"
            type="standard"
            width="300px"
            height="56px"
            theme="filled_black"
            logo_alignment="center"
            onSuccess={(credentialResponse) => {
              navigateClick(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
