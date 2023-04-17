/* eslint-disable react/prop-types */
import { Button, FormControl, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { domainAddress } from "../../../constants/api";

function DesignForm({ selectedImage, craftPaper, activeSlideIndex }) {
  const [form, setForm] = useState({
    phone: "",
    name: "",
  });

  function handleInput(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fullOrder = `Вариант букета №${
      activeSlideIndex + 1
    }, бумага: ${craftPaper}, принт: ${selectedImage}`;

    console.log(fullOrder);
    fetch(`${domainAddress}/mail/fullorder`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form, fullOrder }),
    });

    setForm({ phone: "", name: "" });
  };
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
          required
        />
        <TextField
          id="phoneRep"
          label="ТелефонПовтор"
          variant="outlined"
          name="phoneRep"
          onChange={handleInput}
          required
        />
        <TextField
          id="name"
          label="Имя"
          variant="outlined"
          name="name"
          onChange={handleInput}
          value={form.name}
          required
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Оформить заказ
        </Button>
      </FormControl>
    </form>
  );
}

export default DesignForm;
