/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import ProductElement from "../ProductElement/ProductElement";
import CategoryRow from "../CategoryRow/CategoryRow";

function Products() {
  const products = useSelector((state) => state.ProductSlice.products);

  return (
    <Box style={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {products?.map((el) => (
          <CategoryRow key={el.id} el={el} />
        ))}
      </Box>
    </Box>
  );
}

export default Products;
