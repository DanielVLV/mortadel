/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearInputAction,
  searchProductsAction,
} from "../../redux/saga/searchInput/search.action";

const drawerWidth = 200;

export default function Sidebar({ setFilter, products, filteredProducts }) {
  const [tags, setTags] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isEmpty, setInputCheck] = useState(true);
  const SAGATURBONITROFILTERED = useSelector(
    (state) => state.searchInputReducer.filteredProducts
  );

  const dispatch = useDispatch();
  const getProductsFromState = useSelector(
    (state) => state.ProductSlice.products
  );

  useEffect(() => {
    fetch("http://localhost:3003/api/tags")
      .then((data) => data.json())
      .then((res) => setTags(res))
      .catch(console.error);
    return () => {};
  }, []);

  //   useEffect(() => {
  //   console.log('SET FILTER PRODUCTS SAGA USEEFFECT PRISVOILA FILTEREDPRODUCTS');
  //   setFilter(SAGATURBONITROFILTERED);
  // }, [SAGATURBONITROFILTERED]);

  useEffect(() => {
    if (!selectedTags.length && isEmpty) {
      setFilter(null);
      dispatch(clearInputAction());
      return;
    }

    if (!selectedTags.length) {
      setFilter(SAGATURBONITROFILTERED);
      return;
    }

    if (filteredProducts && !isEmpty) {
      const arr = SAGATURBONITROFILTERED
        .map((category) => ({
          ...category,
          Products: category.Products.filter((product) =>
            selectedTags.every((tagId) =>
              product.Tags.some((tag) => tag.id === Number(tagId))
            )
          ),
        }))
        .filter((category) => category.Products.length > 0);

      setFilter(arr);
    }else if (filteredProducts && isEmpty) {
      const arr = products
        .map((category) => ({
          ...category,
          Products: category.Products.filter((product) =>
            selectedTags.every((tagId) =>
              product.Tags.some((tag) => tag.id === Number(tagId))
            )
          ),
        }))
        .filter((category) => category.Products.length > 0);

      setFilter(arr);
    } else if (selectedTags.length) {
      const arr = products
        .map((category) => ({
          ...category,
          Products: category.Products.filter((product) =>
            selectedTags.every((tagId) =>
              product.Tags.some((tag) => tag.id === Number(tagId))
            )
          ),
        }))
        .filter((category) => category.Products.length > 0);

      setFilter(arr);
    }
  }, [selectedTags, SAGATURBONITROFILTERED]);

  // useEffect(() => {
  //   console.log(
  //     "SET FILTER PRODUCTS SAGA USEEFFECT PRISVOILA FILTEREDPRODUCTS"
  //   );
  //   setFilter(SAGATURBONITROFILTERED);
  // }, [SAGATURBONITROFILTERED]);

  const handleTag = (id, checked) => {
    if (checked) {
      setSelectedTags([...selectedTags, id]);
    } else {
      setSelectedTags(selectedTags.filter((el) => el !== id));
    }
  };

  function handleSearchInput(event) {
    setInputCheck(false);
    setSearchInput(event.target.value);
    if (event.target.value === "") {
      setInputCheck(true);
      console.log("SET FILTER PRODUCTS ПРИ ПУСТОМ ИНПУТЕ КЛАДЕТСЯ ПУСТАЯ САГА");
      // setFilter(null)
      // if(!selectedTags.length) {
      if (selectedTags.length) {
        const arr = products
          .map((category) => ({
            ...category,
            Products: category.Products.filter((product) =>
              selectedTags.every((tagId) =>
                product.Tags.some((tag) => tag.id === Number(tagId))
              )
            ),
          }))
          .filter((category) => category.Products.length > 0);

        setFilter(arr);

        dispatch(
          searchProductsAction({
            input: event.target.value,
            products: arr,
          })
        );
      } else {
        dispatch(clearInputAction());
      }
      // } else {
      //   setFilter(products)
      // }

      console.log("CLEAR INPUT ACTION");
      return;
    }
    if (filteredProducts) {
      dispatch(
        searchProductsAction({
          input: event.target.value,
          products: filteredProducts,
        })
      );
    } else {
      dispatch(
        searchProductsAction({
          input: event.target.value,
          products: getProductsFromState,
        })
      );
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            position: "static",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
          }}
        >
          <List>
            <TextField
              id="outlined-textarea"
              type="text"
              label="Поиск по товарам"
              placeholder="Поиск"
              multiline
              size="small"
              name="searchInput"
              value={searchInput}
              onChange={(event) => handleSearchInput(event)}
            />
            {tags?.map((el) => (
              <ListItem key={el.id} disablePadding>
                <ListItemButton>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={el.id}
                        onChange={(e) =>
                          handleTag(e.target.value, e.target.checked)
                        }
                      />
                    }
                    label={el.tagName}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
