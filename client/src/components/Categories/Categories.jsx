/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import CategoryCard from "./CategoryCard/CategoryCard";
import ModalWindow from "../ModalWindow/ModalWindow";
import { domainAddress } from "../../constants/api";

function Categories({ bar }) {
  const { categoryId } = useParams();
  const products = useSelector((state) => state.ProductSlice.products);
  const [filteredProducts, setFilter] = useState(null);
  const [open, setOpen] = useState(false);
  const [allFavs, setFavs] = useState([]);
  const [loading, setLoad] = useState(true);

  // const onlyProductIdsFromFavs = allFavs?.map((el) => el.productId);
  useEffect(() => {
    fetch(`${domainAddress}/api/favs`, { credentials: "include" })
      .then((data) => data.json())
      .then((res) => setFavs(res))
      .catch(console.error)
      .finally(() => setLoad((prev) => !prev));
  }, []);

  // console.log(onlyProductIdsFromFavs, "ONLYPRODUCTIDSFROMFAVS");

  const SAGATURBONITROFILTERED = useSelector(
    (state) => state.searchInputReducer.filteredProducts
  );

  useEffect(() => {
    setFilter(SAGATURBONITROFILTERED);
  }, [SAGATURBONITROFILTERED]);

  const category = products?.filter((el) => el.id === +categoryId);
  const filterCategory = filteredProducts?.filter(
    (el) => el.id === +categoryId
  );

  const { categoryName } = category[0];


  return (
    <Box style={{ display: "flex" }}>
      <Sidebar
        setFilter={setFilter}
        filteredProducts={filteredProducts}
        products={products}
        bar={bar}
      />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          p: 3,
        }}
      >
        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '28px',
            color: 'gold',
            fontWeight: 'normal',
            backgroundColor: "rgba(67, 71, 92, 0.801)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 60px var(--metal)",
            borderRadius: "20px",
            padding: '5px 30px ',
          }}
        >
          {categoryName}
        </div>
        {filteredProducts
          ? filterCategory[0]?.Products?.map((el) => (
              <CategoryCard
                key={el.id}
                product={el}
                setOpen={setOpen}
                setFavs={setFavs}
                allFavs={allFavs}
                loading={loading}
              />
            ))
          : category &&
            category[0]?.Products?.map((el) => (
              <CategoryCard
                key={el.id}
                product={el}
                setOpen={setOpen}
                // onlyProductIdsFromFavs={onlyProductIdsFromFavs}
                setFavs={setFavs}
                allFavs={allFavs}
                loading={loading}
              />
            ))}
      </Box>
      <ModalWindow setOpen={setOpen} open={open} />
    </Box>
  );
}

export default Categories;
