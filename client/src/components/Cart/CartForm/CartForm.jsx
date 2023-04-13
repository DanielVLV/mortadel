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

function CartForm({ count }) {
  const [form, setForm] = useState({
    phone: "",
    name: "",
  });

  //   console.log(Object.entries(count));

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    console.log(event.target.parentNode);
    let fullOrder = "";
    for (const [key, value] of Object.entries(count)) {
      fullOrder += `Артикул ${key} в количестве ${value} штук, `;
    }
    console.log(fullOrder);
    fetch("http://localhost:3003/mail/fullorder", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form, fullOrder }),
    });

    setForm({ phone: "", name: "" });
  };

  function handleInput(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
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
          label="ТелефонПовтор"
          variant="outlined"
          name="phoneRep"
          onChange={handleInput}
          //   value={form.phone}
        />
        <TextField
          id="name"
          label="Имя"
          variant="outlined"
          name="name"
          onChange={handleInput}
          value={form.name}
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Оформить заказ
        </Button>
      </FormControl>
    </form>
    // </div>
  );
}

export default CartForm;
