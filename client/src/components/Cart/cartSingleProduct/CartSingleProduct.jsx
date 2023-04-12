/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
import React from "react";

function CartSingleProduct({ singleProduct, count }) {
  return (
    <div>
      <div>{singleProduct.title}</div>
      <div>{singleProduct.description}</div>
      <div>Количество: {count[singleProduct.id]}</div>
    </div>
  );
}

export default CartSingleProduct;
