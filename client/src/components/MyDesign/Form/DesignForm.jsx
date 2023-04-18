/* eslint-disable react/prop-types */
import { Button, FormControl, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { domainAddress } from "../../../constants/api";
import { validatePhone } from '../../../js/api.functions';

function DesignForm({ selectedImage, craftPaper, activeSlideIndex }) {
  const initialState = {
    phone: "",
    phone2: "",
    name: "",
  };
  const [form, setForm] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [isSended, seIsSended] = useState(false);

  function handleInput(event) {
    setPhoneError('');
    setIsValid(false);
    seIsSended(false);
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.phone !== form.phone2) {
      setIsValid(true);
      setForm(initialState);
    } else if (validatePhone(form.phone)) {

      const fullOrder = `Вариант букета №${
        activeSlideIndex + 1
      }, бумага: ${craftPaper}, принт: ${selectedImage}`;

      fetch(`${domainAddress}/mail/fullorder`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form, fullOrder }),
      });

      setForm(initialState);
      seIsSended(true);
    } else {
      setPhoneError('Некорректный номер телефона');
      setForm(initialState);
    }
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
          error={!!phoneError}
          helperText={phoneError}
        />
        <TextField
          id="phoneRep"
          label="Повторить номер телефона"
          variant="outlined"
          name="phone2"
          onChange={handleInput}
          required
          value={form.phone2}
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
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Оформить заказ
        </Button>
        {isValid && <div style={{ color: 'red' }}>Проверьте введенные данные</div>}
        {isSended && <div style={{ color: 'blue' }}>Заказ успешно отправлен</div>}
      </FormControl>
    </form>
  );
}

export default DesignForm;
