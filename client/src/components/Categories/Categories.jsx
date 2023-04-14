import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import CategoryCard from "./CategoryCard/CategoryCard";

function Categories() {
  const { categoryId } = useParams();
  const products = useSelector((state) => state.ProductSlice.products);
  const [filteredProducts, setFilter] = useState(null);

  const SAGATURBONITROFILTERED = useSelector(
    (state) => state.searchInputReducer.filteredProducts
  );
  // console.log(SAGATURBONITROFILTERED, 'SAGATURBONITROFILTERED');

  useEffect(() => {
    console.log(
      "SET FILTER PRODUCTS SAGA USEEFFECT PRISVOILA FILTEREDPRODUCTS"
    );
    setFilter(SAGATURBONITROFILTERED);
  }, [SAGATURBONITROFILTERED]);

  const category = products?.filter((el) => el.id === +categoryId);
  const filterCategory = filteredProducts?.filter((el) => el.id === +categoryId);
  console.log(category);

  console.log(filteredProducts);
  return (
    <Box style={{ display: "flex" }}>
      <Sidebar
        setFilter={setFilter}
        filteredProducts={filteredProducts}
        products={products}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {filteredProducts
          ? filterCategory[0]?.Products?.map((el) => (
            <CategoryCard key={el.id} product={el} />
          ))
          : category[0]?.Products?.map((el) => (
            <CategoryCard key={el.id} product={el} />
          ))}
      </Box>
    </Box>
  );
}

export default Categories;
