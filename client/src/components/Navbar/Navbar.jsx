/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { TabContext, TabList } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TelegramIcon from '@mui/icons-material/Telegram';
import Badge from "@mui/material/Badge";

import MenuPopupState from "./MenuPopupState/MenuPopupState";
import { getCart } from "../../redux/CartRedux/cart.selectors";
import { signoutUser } from "../../redux/user.slice";

import './Navbar.css';

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
    <Box sx={{ width: "100%", bgcolor: '#353757' }}>
      <TabContext value={value}>
        <Box sx={{
          borderBottom: 1,
          borderColor: "divider",
          padding: 0,
          textDecoration: 'none',
          '& div a': {
            fontFamily: 'Montserrat, sans-serif',
            // fontFamily: 'Comfortaa, sans-serif',
            color: 'Gold',
            fontSize: '16px'
          },
          '& div a:hover': {
            color: 'DarkOrange',
          },
        }}
        >
          <TabList
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              value="/"
              label={<Link to="/">О компании</Link>}
            />
            <Tab
              value="/categories"
              label={<div style={{
                display: 'flex',
                alignItems: 'center',

              }}
              >
                <Link to="/categories">Продукция</Link>
                <MenuPopupState />
              </div>}
            />
            <Tab
              value="/contacts"
              label={<Link to="/contacts">Мы на карте</Link>}
            />
            <Link to="https://t.me/mortadelshop" target="_blank">
              <TelegramIcon
                sx={{
                  '&:hover': {
                    color: 'DarkOrange',
                    transform: 'scale(1.3)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
                color="primary"
                fontSize="large"
              />
            </Link>
            <Tab
              sx={{
                marginLeft: "auto",
              }}
              value="/design"
              label={<Link to="/design">Оформить подарок</Link>}
            />
            <Tab
              sx={{
                padding: 0,
                textDecoration: 'none',
                '& a': { color: '#1C243B', fontSize: '16px' },
                '& a:hover': {
                  color: 'orange',
                },
              }}
              value="/cart"
              label={
                <Link to="/cart">
                  <Badge badgeContent={cartItems.length} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </Link>
              }
            />
            {user ? (
              <Tab
                sx={{ marginLeft: "auto", }}
                value="/signout"
                label={
                  <Link to="/" variant="text" onClick={handleSignout}>
                    Выйти
                  </Link>
                }
              />
            ) : (
              <Tab
                sx={{ marginLeft: "auto", }}
                value="/auth"
                label={<Link to="/auth">Регистрация/Войти</Link>}
              />
            )}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
