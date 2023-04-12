/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { TextField, FormControl, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import './FormOrder.css';

function FormOrder({ productId }) {

  // console.log(productId, 'PRODUCT ID');

  const [form, setForm] = React.useState({
    phone: '', name: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    console.log(event.target.parentNode);

    fetch('http://localhost:3003/mail/order', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ form, productId }),
    });

    setForm({ phone: '', name: '' });

  };

  function handleInput(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="inputGroup">
        <TextField id="phone" label="Телефон" variant="outlined" name="phone" onChange={handleInput} value={form.phone} />
        <TextField id="name" label="Имя" variant="outlined" name="name" onChange={handleInput} value={form.name} />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Оформить заказ
        </Button>

      </FormControl>
    </form>
  );
}

export default FormOrder;
