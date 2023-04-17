/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";
import { useSelector } from "react-redux";
import CartSingleProduct from "../cartSingleProduct/CartSingleProduct";
import { getCart } from "../../../redux/CartRedux/cart.selectors";

function CartRow({ uniqueArray, count, summaryPrice }) {

  // const productSummaryList = useSelector(getCart);
  // const summaryPrice = productSummaryList.map((el) => el.price)
  //   .reduce((acc, curVal) => acc + curVal, 0);

  return (
    <>
      {uniqueArray.map((singleProduct) => {
        return (
          <CartSingleProduct singleProduct={singleProduct} count={count} />
        );
      })}
      <div>{`Итоговая сумма заказа: ${summaryPrice}`}</div>
    </>
  );
}

export default CartRow;
