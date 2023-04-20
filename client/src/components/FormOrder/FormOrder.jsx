/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from "react";
import { TextField, FormControl, Button, styled, makeStyles } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import "./FormOrder.css";
import { domainAddress } from "../../constants/api";
import { validatePhone } from "../../js/api.functions";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffd700",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffd700",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffd700",
      borderRadius: 12,
    },
    "&:hover fieldset": {
      borderColor: "#c5aa12",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#c5aa12",
    },
    "& .MuiInputBase-input": {
      color: "#ffd700",
    },
  },
});



function FormOrder({
  productId,
  setOpen,
  phoneError,
  setPhoneError,
  form,
  setForm,
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validatePhone(form.phone)) {
      fetch(`${domainAddress}/mail/order`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form, productId }),
      });
      setForm({ phone: "", name: "" });
      setOpen(false);
    } else {
      setPhoneError("Некорректный номер телефона");
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
          "&>*": {
            fontFamily: "Lato Medium, sans-serif",
          },
        }}
        id="inputGroup"
      >
        <CssTextField
          InputLabelProps={{
            style: { color: "#ffd700" },
          }}
          AutocompleteProps={{
            style: { backgroundColor: "red", color: "white" } // задаем inline-стиль для фона и цвета текста в дропдауне
          }}
          // InputProps={{ style: customStyle }}
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
        <CssTextField
          InputLabelProps={{
            style: { color: "#ffd700" },
          }}
          id="name"
          label="Имя"
          variant="outlined"
          name="name"
          onChange={handleInput}
          value={form.name}
          required
        />
        <Button
          sx={{ fontFamily: "Lato Medium, sans-serif", }}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Оставить заявку
        </Button>
      </FormControl>
    </form>
  );
}

export default FormOrder;
