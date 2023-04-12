/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIntoCart,
  removeFromCart,
} from "../../../redux/CartRedux/cart.actions";
import { getCart } from "../../../redux/CartRedux/cart.selectors";

function CartSingleProduct({ singleProduct, count }) {
  const dispatch = useDispatch();
  const cartArr = useSelector(getCart);
  const hadleClickRemove = () => {
    const index = cartArr.findIndex((el) => el.id === singleProduct.id);
    dispatch(removeFromCart(index));
  };

  const handleClickAdd = () => {
    dispatch(addIntoCart(singleProduct));
  };
  return (
    <div>
      <div>{singleProduct.title}</div>
      <div>{singleProduct.description}</div>
      <div>Количество: {count[singleProduct.id]}</div>
      <button type="button" onClick={handleClickAdd}>
        +
      </button>
      <button type="button" onClick={hadleClickRemove}>
        -
      </button>
    </div>
  );
}

export default CartSingleProduct;
