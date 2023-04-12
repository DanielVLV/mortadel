/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";
import CartSingleProduct from "../cartSingleProduct/CartSingleProduct";

function CartRow({ uniqueArray, count }) {
  return (
    <>
      {uniqueArray.map((singleProduct) => {
        return (
          <CartSingleProduct singleProduct={singleProduct} count={count} />
        );
      })}
    </>
  );
}

export default CartRow;
