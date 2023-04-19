/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Avatar, Button, Grid, Paper, TextField, Typography
} from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { clearError, signUpUser } from '../../../redux/user.slice';
import { domainAddress } from '../../../constants/api';
import { validateEmail, validatePhone } from '../../../js/api.functions';

function Signup() {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };
  const error = useSelector((state) => state.UserSlice.error);
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const paperStyle = {
    padding: 20, height: '60vh', width: 300, margin: "0 auto"
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0', fontFamily: 'Montserrat sans-serif' };

  const handleInput = (event) => {
    if (error) { dispatch(clearError()); }
    setPhoneError('');
    setEmailError('');
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validatePhone(form.phone) && validateEmail(form.email)) {
      const url = `${domainAddress}/signup`;
      dispatch(signUpUser({ url, form }));
      setForm(initialState);
    } else {
      if (!validatePhone(form.phone)) {
        setPhoneError('Некорректный номер телефона');
        setForm(initialState);
      } if (!validateEmail(form.email)) {
        setEmailError('Некорректный email');
        setForm(initialState);
      }
    }
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
          <Typography
            sx={{ fontFamily: 'Montserrat sans-serif', fontSize: '15px' }}
            variant="caption"
            gutterBottom
          >
            Пожалуйста, заполните для создания аккаунта !
          </Typography>
        </Grid>
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField fullWidth label="Имя" name="name" placeholder="Введите свое имя" value={form?.name} onChange={handleInput} />
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
          <TextField
            fullWidth
            label="Номер телефона"
            placeholder="Введите номер телефона"
            name="phone"
            value={form?.phone}
            onChange={handleInput}
            error={!!phoneError}
            helperText={phoneError}
          />
          <TextField fullWidth label="Пароль" name="password" placeholder="Введите пароль" value={form?.password} inputProps={{ minLength: 8 }} onChange={handleInput} />
          <Button style={btnstyle} type="submit" variant="contained" color="primary" fullWidth>Регистрация</Button>
        </form>

        <Typography sx={{ fontFamily: 'Montserrat sans-serif', fontSize: '15px' }}>
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
        {error && <div style={{ color: 'red', fontFamily: 'Montserrat sans-serif' }}>Пользователь уже зарегистрирован</div>}
      </Paper>
    </Grid>
  );
}

export default Signup;
