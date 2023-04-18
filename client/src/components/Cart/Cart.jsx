/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/CartRedux/cart.selectors";
import CartForm from "./CartForm/CartForm";
import CartRow from "./cartRow/CartRow";
import Favourites from "./Favourites/Favourites";

function Cart() {

  const cartArr = useSelector(getCart);
  const [uniqueArray, setUnique] = useState([]);
  const [isCart, setCart] = useState(true);
  const user = useSelector((state) => state.UserSlice.value);

  const summaryPrice = cartArr.map((el) => el.price)
    .reduce((acc, curVal) => acc + curVal, 0);

  // удаление повторных элементов
  useEffect(() => {
    setUnique([...new Set(cartArr)]);
  }, [cartArr]);
  console.log(cartArr, "cartArr");
  console.log(uniqueArray, "unique");

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
    <div>

      {user && (
        <>
          <span>Корзина</span>
          <Switch onChange={handleChange} />
          <span>Избранное</span>
        </>
      )}
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
  );
}

export default Cart;
