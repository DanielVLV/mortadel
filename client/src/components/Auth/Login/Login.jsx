/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
  styled,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { clearError, signUpUser } from "../../../redux/user.slice";
import { domainAddress } from "../../../constants/api";
import { validateEmail } from "../../../js/api.functions";

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

function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const error = useSelector((state) => state.UserSlice.error);
  const [form, setForm] = useState(initialState);
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch();

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "0 auto",
    backgroundColor: "rgba(67, 71, 92, 0.3)",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const handleInput = (event) => {
    if (error) {
      dispatch(clearError());
    }
    setEmailError("");
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(form.email)) {
      const url = `${domainAddress}/signin`;
      dispatch(signUpUser({ url, form }));
      setForm(initialState);
    } else {
      setEmailError("Некорректный email");
      setForm(initialState);
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
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockRoundedIcon />
          </Avatar>
          <h2 style={{ fontFamily: "Montserrat sans-serif" }}>Войти</h2>
          <Typography
            sx={{
              fontFamily: "Montserrat sans-serif",
              fontSize: "14px",
              mb: "5px",
            }}
            variant="caption"
            gutterBottom
          >
            Пожалуйста, войдите в свою учетную запись !
          </Typography>
        </Grid>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CssTextField
            InputLabelProps={{
              style: { color: "#ffd700" },
            }}
            fullWidth
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
            fullWidth
            label="Пароль"
            name="password"
            placeholder="Введите пароль"
            value={form?.password}
            onChange={handleInput}
            inputProps={{ minLength: 8 }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Вход
          </Button>
        </form>

        <Typography
          sx={{
            fontFamily: "Montserrat sans-serif",
            fontSize: "16px",
            fontWeight: "normal",
          }}
        >
          Есть аккаунт в Google?
        </Typography>
        <Typography>
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
        </Typography>
        {error && (
          <div style={{ color: "red", fontFamily: "Montserrat sans-serif" }}>
            Неверная пара email/пароль
          </div>
        )}
      </Paper>
    </Grid>
  );
}

export default Login;
