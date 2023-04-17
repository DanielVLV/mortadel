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
  console.log('count', summaryPrice);
  const [openPayment, setOpenPayment] = useState(false);

  // console.log(summaryPrice);

  //   console.log(Object.entries(count));

  const handleSubmit = async (event) => {
    event.preventDefault();

    setOpenPayment(true);
    console.log(openPayment);
    let fullOrder = "";
    for (const [key, value] of Object.entries(count)) {
      fullOrder += `Артикул ${key} в количестве ${value} штук, `;
    }
    console.log(fullOrder);
    fetch(`${domainAddress}/mail/fullorder`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form, fullOrder }),
    });

    setForm({ phone: "", phone2: "", name: "" });

  };

  function handleInput(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    // <div>
    <form onSubmit={handleSubmit}>
      <FormControl id="inputGroup">
        <TextField
          id="phone"
          label="Телефон"
          variant="outlined"
          name="phone"
          onChange={handleInput}
          value={form.phone}
        />
        <TextField
          id="phoneRep"
          label="Повторить номер телефона"
          variant="outlined"
          name="phoneRep"
          onChange={handleInput}
          value={form.phone2}
        />
        <TextField
          id="name"
          label="Имя"
          variant="outlined"
          name="name"
          onChange={handleInput}
          value={form.name}
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
      </FormControl>
      <PaymentForm
        openPayment={openPayment}
        setOpenPayment={setOpenPayment}
        summaryPrice={summaryPrice}
      />
    </form>
    // </div>
  );
}

export default CartForm;
