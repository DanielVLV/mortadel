/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Avatar, Button, Grid, Paper, TextField, Typography
} from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { signUpUser } from '../../../redux/user.slice';
import { domainAddress } from '../../../constants/api';

function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const paperStyle = {
    padding: 20, height: '60vh', width: 300, margin: "0 auto"
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  const handleInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${domainAddress}/signup`;
    dispatch(signUpUser({ url, form }));
    setForm({
      name: '',
      email: '',
      phone: '',
      password: '',
    });
  };

  const navigateClick = async (googleToken) => {
    dispatch(signUpUser({
      url: `${domainAddress}/googlesignup`,
      form: googleToken
    }));
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineRoundedIcon />
          </Avatar>
          <h2 style={headerStyle}>Регистрация</h2>
          <Typography variant="caption" gutterBottom>Пожалуйста, заполните для создания аккаунта !</Typography>
        </Grid>
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField fullWidth label="Имя" name="name" placeholder="Введите свое имя" value={form?.name} onChange={handleInput} />
          <TextField fullWidth label="Email" name="email" placeholder="Введите свой email" value={form?.email} onChange={handleInput} />
          <TextField fullWidth label="Номер телефона" placeholder="Введите номер телефона" name="phone" value={form?.phone} onChange={handleInput} />
          <TextField fullWidth label="Пароль" name="password" placeholder="Введите пароль" value={form?.password} onChange={handleInput} />
          <Button style={btnstyle} type="submit" variant="contained" color="primary" fullWidth>Регистрация</Button>
        </form>

        <Typography>
          Есть аккаунт в Google?
        </Typography>
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
      </Paper>
    </Grid>
  );
}

export default Signup;
