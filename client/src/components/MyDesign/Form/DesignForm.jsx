/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import {
  Autocomplete,
  Button,
  FormControl,
  styled,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { domainAddress } from "../../../constants/api";
import { validatePhone } from "../../../js/api.functions";

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
      "&:focus": {
        boxShadow: "0 0 0 0rem",
      },
    },
  },
});

function DesignForm({ selectedImage, craftPaper, activeSlideIndex }) {
  const initialState = {
    phone: "",
    phone2: "",
    name: "",
  };
  const [form, setForm] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isSended, seIsSended] = useState(false);

  function handleInput(event) {
    setPhoneError("");
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
      setPhoneError("Некорректный номер телефона");
      setForm(initialState);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          "& > *": {
            fontFamily: "Lato Medium, sans-serif",
            fontSize: "14px",
          },
        }}
        id="inputGroup"
      >
        <CssTextField
          InputLabelProps={{
            style: { color: "#ffd700" },
          }}
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
          id="phoneRep"
          label="Повторить номер телефона"
          variant="outlined"
          name="phone2"
          onChange={handleInput}
          required
          value={form.phone2}
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
          inputProps={{ maxLength: 20 }}
          required
        />
        <Button
          sx={{ fontFamily: "Lato Medium, sans-serif",
            color: 'gold',
            background: 'rgba(128, 128, 128)',
            borderRadius: '10px' }}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Оформить заказ
        </Button>
        {isValid && (
          <div style={{ color: "red" }}>Проверьте введенные данные</div>
        )}
        {isSended && (
          <div style={{ color: "blue" }}>Заказ успешно отправлен</div>
        )}
      </FormControl>
    </form>
  );
}

export default DesignForm;
