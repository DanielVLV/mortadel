/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { clearError, signUpUser } from "../../../redux/user.slice";
import { domainAddress } from "../../../constants/api";
import { validateEmail, validatePhone } from "../../../js/api.functions";
import '../auth.css';

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
      margin: 8,
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

function Signup() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  const error = useSelector((state) => state.UserSlice.error);
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "0 auto",
    backgroundColor: "rgba(67, 71, 92, 0.3)",
  };
  // const headerStyle = { fontSize: 36, margin: 0 };
  const avatarStyle = { backgroundColor: "#353757" };
  const btnstyle = {
    margin: "8px 0", fontFamily: "Montserrat sans-serif", backgroundColor: "#353757", color: "gold"
  };

  const handleInput = (event) => {
    if (error) {
      dispatch(clearError());
    }
    setPhoneError("");
    setEmailError("");
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
        setPhoneError("Некорректный номер телефона");
        setForm(initialState);
      }
      if (!validateEmail(form.email)) {
        setEmailError("Некорректный email");
        setForm(initialState);
      }
    }
  };

  const navigateClick = async (googleToken) => {
    dispatch(
      signUpUser({
        url: `${domainAddress}/googlesignup`,
        form: googleToken,
      })
    );
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineRoundedIcon />
          </Avatar>
          <h2 style={{ fontFamily: "Montserrat sans-serif", fontSize: 36, margin: 0 }}>Регистрация</h2>
          <Typography
            sx={{ fontFamily: "Montserrat sans-serif", fontSize: "15px" }}
            variant="caption"
            gutterBottom
          >
            {/* Заполните для создания аккаунта ! */}
          </Typography>
        </Grid>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CssTextField
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
            id="custom-css-outlined-input"
            fullWidth
            autoComplete="off"
            label="Имя"
            name="name"
            placeholder="Введите свое имя"
            value={form?.name}
            onChange={handleInput}
          />
          <CssTextField
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
            id="custom-css-outlined-input"
            fullWidth
            autoComplete="off"
            label="Email"
            name="email"
            placeholder="Введите свой email"
            value={form?.email}
            onChange={handleInput}
            error={!!emailError}
            helperText={emailError}
          />
          <CssTextField
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
            id="custom-css-outlined-input"
            fullWidth
            autoComplete="off"
            label="Номер телефона"
            placeholder="Введите номер телефона"
            name="phone"
            value={form?.phone}
            onChange={handleInput}
            error={!!phoneError}
            helperText={phoneError}
          />
          <CssTextField
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
            id="custom-css-outlined-input"
            fullWidth
            autoComplete="off"
            label="Пароль"
            name="password"
            placeholder="Введите пароль"
            value={form?.password}
            inputProps={{ minLength: 8 }}
            onChange={handleInput}
          />
          <Button
            style={btnstyle}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Зарегистрироваться
          </Button>
        </form>

        <Typography
          sx={{ fontFamily: "Montserrat sans-serif", fontSize: "15px", color: 'gold' }}
        >
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
            console.log("Login Failed");
          }}
        />
        {error && (
          <div style={{ color: "red", fontFamily: "Montserrat sans-serif" }}>
            Пользователь уже зарегистрирован
          </div>
        )}
      </Paper>
    </Grid>
  );
}

export default Signup;
