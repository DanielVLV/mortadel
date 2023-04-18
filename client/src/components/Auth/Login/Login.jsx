/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import {
  Grid, Paper, TextField, Button, Typography, Avatar
} from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { clearError, signUpUser } from '../../../redux/user.slice';
import { domainAddress } from '../../../constants/api';
import { validateEmail } from '../../../js/api.functions';

function Login() {
  const error = useSelector((state) => state.UserSlice.error);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();

  const paperStyle = {
    padding: 20, height: '60vh', width: 300, margin: "0 auto"
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };

  const handleInput = (event) => {
    if (error) { dispatch(clearError()); }
    setEmailError('');
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(form.email)) {
      const url = `${domainAddress}/signin`;
      dispatch(signUpUser({ url, form }));
      setForm({
        email: '',
        password: '',
      });
    } else {
      setEmailError('Некорректный email');
      setForm({
        name: '',
        email: '',
        phone: '',
        password: '',
      });
    }
  };
  const navigateClick = async (googleToken) => {
    dispatch(signUpUser({
      url: `${domainAddress}/googlesignup`,
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

          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Введите свой email"
            value={form?.email}
            onChange={handleInput}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField fullWidth label="Пароль" name="password" placeholder="Введите пароль" value={form?.password} onChange={handleInput} inputProps={{ minLength: 8 }} />
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
        {error && <div style={{ color: 'red' }}>Неверная пара email/пароль</div>}
      </Paper>
    </Grid>
  );
}

export default Login;
