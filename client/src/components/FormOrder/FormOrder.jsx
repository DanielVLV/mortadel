/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { TextField, FormControl, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import './FormOrder.css';
import { domainAddress } from '../../constants/api';
import { validatePhone } from '../../js/api.functions';

function FormOrder({
  productId, setOpen, phoneError, setPhoneError, form, setForm
}) {

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validatePhone(form.phone)) {
      fetch(`${domainAddress}/mail/order`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ form, productId }),
      });
      setForm({ phone: '', name: '' });
      setOpen(false);
    } else {
      setPhoneError('Некорректный номер телефона');
      setForm({ phone: "", name: "" });
    }
  };


  function handleInput(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          '&>*': {
            fontFamily: 'Lato Medium, sans-serif'
          }
        }}
        id="inputGroup"
      >
        <TextField
          id="phone"
          label="Телефон"
          variant="outlined"
          name="phone"
          onChange={handleInput}
          value={form.phone}
          required
          error={!!phoneError}
          helperText={phoneError}
        />
        <TextField id="name" label="Имя" variant="outlined" name="name" onChange={handleInput} value={form.name} required />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Оставить заявку
        </Button>
      </FormControl>
    </form>
  );
}

export default FormOrder;
