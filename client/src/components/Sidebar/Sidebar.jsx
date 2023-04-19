/* eslint-disable jsx-a11y/label-has-associated-control */
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
import { Link, useLocation } from "react-router-dom";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearInputAction,
  searchProductsAction,
} from "../../redux/saga/searchInput/search.action";
import { domainAddress } from '../../constants/api';
import './Sidebar.css';

const drawerWidth = 200;

export default function Sidebar({ setFilter, products, filteredProducts }) {
  const [tags, setTags] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isEmpty, setInputCheck] = useState(true);
  const location = useLocation().pathname;
  const SAGATURBONITROFILTERED = useSelector(
    (state) => state.searchInputReducer.filteredProducts
  );

  const dispatch = useDispatch();
  const getProductsFromState = useSelector(
    (state) => state.ProductSlice.products
  );

  useEffect(() => {
    setFilter(SAGATURBONITROFILTERED);
  }, [SAGATURBONITROFILTERED]);

  useEffect(() => {
    fetch(`${domainAddress}/api/tags`)
      .then((data) => data.json())
      .then((res) => setTags(res))
      .catch(console.error);
    return () => {};
  }, []);

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
    } else if (filteredProducts && isEmpty) {
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
      return;
    }
    if (filteredProducts) {
      dispatch(
        searchProductsAction({
          input: event.target.value,
          products: getProductsFromState,
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
    <Box sx={{ display: "flex", position: "fixed" }}>
      <CssBaseline />
      <AppBar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            // marginTop: '145px',
            // maxHeight: '595px',
            // minWidth: '300px',
            position: "static",
            width: drawerWidth,
            boxSizing: "border-box",
            borderRadius: '20px',
            backgroundColor: "rgba(67, 71, 92, 0.801)",
            border: '2px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 60px var(--metal)',
          },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            borderRadius: '20px',
            color: 'Gold',
            // padding: '30px',
            backgroundColor: 'rgba(67, 71, 92, 0.135)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 60px var(--metal)',
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
              <ListItem key={el.id}>
                <FormControlLabel
                  sx={{
                    "& > label > *": {
                      fontFamily: 'Lato Medium, sans-serif',
                      fontSize: '18px',
                      color: 'gold'
                    }
                  }}
                  control={
                    <div className="checkbox-css">
                      <input
                          // id="check2"
                        type="checkbox"
                        value={el.id}
                        onChange={(e) =>
                          handleTag(e.target.value, e.target.checked)}
                      />
                      <label htmlFor="check2" />
                    </div>
                    }
                  label={el.tagName}
                />



              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
