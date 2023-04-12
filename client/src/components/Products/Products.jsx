/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";

import Sidebar from "../Sidebar/Sidebar";
import ProductElement from "../ProductElement/ProductElement";
import CategoryRow from "../CategoryRow/CategoryRow";

function Products() {
  const products = useSelector((state) => state.ProductSlice.products);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>

          <Box component="main" sx={{ p: 3 }}>
            {products?.map((el) => (
              <CategoryRow key={el.id} el={el} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
