/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCart } from "../../redux/CartRedux/cart.selectors";
import CartForm from "./CartForm/CartForm";
import CartRow from "./cartRow/CartRow";

function Cart() {

  const cartArr = useSelector(getCart);



  const summaryPrice = cartArr.map((el) => el.price)
    .reduce((acc, curVal) => acc + curVal, 0);

  // удаление повторных элементов
  const uniqueArray = [...new Set(cartArr)];

  // подсчет количества повторений каждого элемента
  const count = {};
  for (let item of cartArr) {
    count[item.id] = (count[item.id] || 0) + 1;
  }

  // console.log("Уникальные элементы: ", uniqueArray[0]);
  // console.log("Количество повторений для каждого элемента: ", count);

  return (
    <div>
      <CartRow uniqueArray={uniqueArray} count={count} summaryPrice={summaryPrice} />

      <CartForm count={count} summaryPrice={summaryPrice} />
    </div>
  );
}

export default Cart;
