/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/CartRedux/cart.selectors";
import CartForm from "./CartForm/CartForm";
import CartRow from "./cartRow/CartRow";
import Favourites from "./Favourites/Favourites";

function Cart() {
  const cartArr = useSelector(getCart);
  const [isCart, setCart] = useState(true);
  const user = useSelector((state) => state.UserSlice.value);

  // удаление повторных элементов
  const uniqueArray = [...new Set(cartArr)];

  // подсчет количества повторений каждого элемента
  const count = {};
  for (let item of cartArr) {
    count[item.id] = (count[item.id] || 0) + 1;
  }

  const handleChange = (id, checked) => {
    if (checked) {
      setCart(false);
    } else {
      setCart(true);
    }
  };

  return (
    <div>
      {user && <Switch onChange={handleChange} />}
      {isCart ? (
        <CartRow uniqueArray={uniqueArray} count={count} />
      ) : (
        <Favourites />
      )}

      <CartForm count={count} />
    </div>
  );
}

export default Cart;
