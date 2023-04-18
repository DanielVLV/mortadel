/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TelegramIcon from '@mui/icons-material/Telegram';
import Badge from "@mui/material/Badge";

import MenuPopupState from "./MenuPopupState/MenuPopupState";
import { getCart } from "../../redux/CartRedux/cart.selectors";
import { signoutUser } from "../../redux/user.slice";

export default function Navbar() {
  const location = useLocation();
  const cartItems = useSelector(getCart);
  const dispatch = useDispatch();

  const [value, setValue] = useState(location.pathname);
  const user = useSelector((state) => state.UserSlice.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSignout = () => {
    dispatch(signoutUser(user));
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ padding: 0 }}
              value="/"
              label={<Link to="/">О компании</Link>}
            />
            <Tab
              sx={{ padding: 0 }}
              value="/categories"
              label={<Link to="/categories">Продукция</Link>}
            />
            <Tab
              sx={{ padding: 0 }}
              value=""
              label={<MenuPopupState />}
            />
            <Tab
              sx={{ padding: 0 }}
              value="/contacts"
              label={<Link to="/contacts">Связаться с нами</Link>}
            />
            <Link to="https://t.me/goncharovp" target="_blank"><TelegramIcon color="primary" fontSize="large" /></Link>
            <Tab
              sx={{ marginLeft: "auto", padding: 0 }}
              value="/design"
              label={<Link to="/design">Оформить подарок</Link>}
            />
            {user ? (
              <Tab
                sx={{ marginLeft: "auto", padding: 0 }}
                value="/signout"
                label={
                  <Link to="/" variant="text" onClick={handleSignout}>
                    Выйти
                  </Link>
                }
              />
            ) : (
              <Tab
                sx={{ marginLeft: "auto", padding: 0 }}
                value="/auth"
                label={<Link to="/auth">Регистрация/Войти</Link>}
              />
            )}
            <Tab
              sx={{ padding: 0 }}
              value="/cart"
              label={
                <Link to="/cart">
                  <Badge badgeContent={cartItems.length} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </Link>
              }
            />
          </TabList>
        </Box>


      </TabContext>
    </Box>
  );
}
