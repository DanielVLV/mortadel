/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from "react";
import ProductElement from "../ProductElement/ProductElement";

function CategoryRow({ el }) {
  return (
    <>
      <h2>{el.categoryName}</h2>
      {el.Products.map((product) => (
        <ProductElement key={product.id} product={product} />
      ))}
    </>
  );
}

export default CategoryRow;
