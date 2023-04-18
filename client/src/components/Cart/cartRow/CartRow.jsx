/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import CartSingleProduct from "../cartSingleProduct/CartSingleProduct";
import { getCart } from "../../../redux/CartRedux/cart.selectors";

function CartRow({ uniqueArray, count, setUnique, summaryPrice }) {
  return (
    <Box>
      {Boolean(uniqueArray.length) && (
        <h2>{`Итоговая сумма заказа: ${summaryPrice}`}</h2>
      )}
      {uniqueArray.map((singleProduct) => {
        return (
          <CartSingleProduct
            key={singleProduct.id}
            singleProduct={singleProduct}
            count={count}
            // setUnique={setUnique}
          />
        );
      })}
    </Box>
  );
}

export default CartRow;
