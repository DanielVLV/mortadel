/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useSelector } from "react-redux";
import { getCart, getUniqueCart } from "../../redux/CartRedux/cart.selectors";
import CartForm from "./CartForm/CartForm";
import CartRow from "./cartRow/CartRow";
import Favourites from "./Favourites/Favourites";
import styles from "./cart.module.css";
import "./Cart.css";

function Cart() {
  const cartArr = useSelector(getCart);
  const uniqueCart = useSelector(getUniqueCart);
  const [uniqueArray, setUnique] = useState([]);
  const [isCart, setCart] = useState(true);
  const user = useSelector((state) => state.UserSlice.value);

  const summaryPrice = cartArr
    .map((el) => el.price)
    .reduce((acc, curVal) => acc + curVal, 0);

  // удаление повторных элементов
  useEffect(() => {
    const uniqueArr = cartArr.filter(
      (obj, index, self) =>
        index === self.findIndex((t) => t.id === obj.id && t.name === obj.name)
    );
    // const uniqueSet = new Set(cartArr);
    // console.log(uniqueArr, "NEW UNIQUE ARR");
    setUnique(uniqueArr);
  }, [cartArr]);
  // console.log(cartArr, "cartArr");
  // console.log(uniqueCart, "uniqueCartWADADAWDAWDAWDAWDAWD");
  // console.log(uniqueArray, "unique");

  const uniqueArraySorted = uniqueArray.sort((a, b) => (a.id > b.id ? 1 : -1));
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
    <div className={styles.allDivCart}>
      {user && (
        <>
          <span>Корзина</span>
          <Switch color="default" onChange={handleChange} />
          <span>Избранное</span>
        </>
      )}
      <div className={styles.container}>
        {isCart ? (
          <CartRow
            uniqueArray={uniqueArraySorted}
            count={count}
            summaryPrice={summaryPrice}
            setUnique={setUnique}
          />
        ) : (
          <Favourites />
        )}
        <CartForm count={count} summaryPrice={summaryPrice} />
      </div>
    </div>
  );
}

export default Cart;
