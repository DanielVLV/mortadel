/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";

import Sidebar from "../Sidebar/Sidebar";
import CategoryRow from "../CategoryRow/CategoryRow";
import ModalWindow from '../ModalWindow/ModalWindow';

function Products() {
  const products = useSelector((state) => state.ProductSlice.products);
  const [filteredProducts, setFilter] = useState([]);
  const [open, setOpen] = useState(false);
  console.log(open);


  const SAGATURBONITROFILTERED = useSelector((state) => state.searchInputReducer.filteredProducts);
  // console.log(SAGATURBONITROFILTERED, 'SAGATURBONITROFILTERED');

  useEffect(() => {
    setFilter(SAGATURBONITROFILTERED);
    console.log('SET FILTER PRODUCTS<><><><><><><');
  }, [SAGATURBONITROFILTERED]);

  // console.log(filteredProducts, "filteredProducts");
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar setFilter={setFilter} filteredProducts={filteredProducts} products={products} />
        </Grid>
        <Grid item xs={10}>

          <Box component="main" sx={{ p: 3 }}>
            {filteredProducts.length ? filteredProducts.map((el) => (
              <CategoryRow key={el.id} el={el} setOpen={setOpen} />
            )) : products?.map((el) => (
              <CategoryRow key={el.id} el={el} setOpen={setOpen} />
            ))}
          </Box>
        </Grid>
      </Grid>
      <ModalWindow setOpen={setOpen} open={open} />
    </Box>
  );
}

export default Products;
