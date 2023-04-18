/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable quotes */
import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PaymentForm from "../../PaymentForm/PaymentForm";
import { domainAddress } from '../../../constants/api';


function CartForm({ count, summaryPrice }) {
  const [form, setForm] = useState({
    phone: "",
    phone2: "",
    name: "",
  });
  const [openPayment, setOpenPayment] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.phone !== form.phone2) {
      setIsValid(true);
      setForm({ phone: "", phone2: "", name: "" });
    } else {
      setOpenPayment(true);

      let fullOrder = "";
      for (const [key, value] of Object.entries(count)) {
        fullOrder += `Артикул ${key} в количестве ${value} штук, `;
      }
      fetch(`${domainAddress}/mail/fullorder`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form, fullOrder }),
      });

      setForm({ phone: "", phone2: "", name: "" });
    }
  };

  function handleInput(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="inputGroup" sx={{ ml: 4 }}>
        <TextField
          id="phone"
          label="Телефон"
          variant="outlined"
          name="phone"
          onChange={handleInput}
          value={form.phone}
          // inputProps={{ maxLength: 20, pattern: /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/ }}
          required

        />
        <TextField
          id="phoneRep"
          label="Повторить номер телефона"
          variant="outlined"
          name="phone2"
          onChange={handleInput}
          value={form.phone2}
          required

        />
        <TextField
          id="name"
          label="Имя"
          variant="outlined"
          name="name"
          onChange={handleInput}
          value={form.name}
          inputProps={{ maxLength: 20 }}
          required
        />
        {summaryPrice ? (
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Оформить заказ
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Корзина пуста
          </Button>
        )}
        {isValid && <div style={{ color: 'red' }}>Некокрректные данные</div>}
      </FormControl>
      <PaymentForm
        openPayment={openPayment}
        setOpenPayment={setOpenPayment}
        summaryPrice={summaryPrice}
      />
    </form>
  );
}

export default CartForm;
