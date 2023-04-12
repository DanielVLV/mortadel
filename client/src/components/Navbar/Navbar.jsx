/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

import MenuPopupState from "./MenuPopupState/MenuPopupState";
import { getCart } from "../../redux/CartRedux/cart.selectors";

export default function Navbar() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const cartItems = useSelector(getCart);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              label={
                <Link to="/categories">
                  <MenuPopupState />
                </Link>
              }
            />
            {/* <Tab sx={{ padding: 0 }}
            value="/products" label={<Link to="/categories">Продукция</Link>} /> */}
            <Tab
              sx={{ padding: 0 }}
              value="/auth"
              label={<Link to="/auth">Регистрация/Войти</Link>}
            />
            <Tab
              sx={{ padding: 0 }}
              value="/contacts"
              label={<Link to="/contacts">Связаться с нами</Link>}
            />
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
        <TabPanel value="/" index={0}>
          О компании
        </TabPanel>

        <TabPanel value="/products" index={1}>
          Продукция меню
        </TabPanel>
        <TabPanel value="/auth" index={2}>
          Регистрация/Войти
        </TabPanel>
        <TabPanel value="/contacts" index={3}>
          Связаться с нами
        </TabPanel>
        <TabPanel value="/cart" index={4}>
          Корзина
        </TabPanel>
      </TabContext>
    </Box>
  );
}
