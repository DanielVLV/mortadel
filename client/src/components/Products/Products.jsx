/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Box, Grid } from "@mui/material";

import Sidebar from "../Sidebar/Sidebar";
import CategoryRow from "../CategoryRow/CategoryRow";
import ModalWindow from "../ModalWindow/ModalWindow";
import { domainAddress } from "../../constants/api";
import stylesProduct from './products.module.css';

function Products() {
  const products = useSelector((state) => state.ProductSlice.products);

  const [filteredProducts, setFilter] = useState(null);
  const [open, setOpen] = useState(false);
  const [allFavs, setFavs] = useState([]);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    fetch(`${domainAddress}/api/favs`, { credentials: "include" })
      .then((data) => data.json())
      .then((res) => setFavs(res))
      .catch(console.error)
      .finally(() => setLoad((prev) => !prev));
  }, []);

  return (
    <Box>
      <Grid
        container
        spacing={2}
        className={stylesProduct.gridContainer}
      >
        <Grid item xs={2}>
          <Sidebar
            setFilter={setFilter}
            filteredProducts={filteredProducts}
            products={products}
          />
        </Grid>
        <Grid item xs={10}>
          <Box component="main" sx={{ p: 3 }}>
            {filteredProducts
              ? filteredProducts.map((el) => (
                  <CategoryRow
                    key={el.id}
                    el={el}
                    setOpen={setOpen}
                    setFavs={setFavs}
                    allFavs={allFavs}
                    loading={loading}
                  />
                ))
              : products?.map((el) => (
                  <CategoryRow
                    key={el.id}
                    el={el}
                    setOpen={setOpen}
                    setFavs={setFavs}
                    allFavs={allFavs}
                    loading={loading}
                  />
                ))}
          </Box>
        </Grid>
      </Grid>
      <ModalWindow setOpen={setOpen} open={open} />
    </Box>
  );
}

export default Products;
