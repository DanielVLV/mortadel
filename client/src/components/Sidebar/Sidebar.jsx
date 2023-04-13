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
import { useDispatch, useSelector } from 'react-redux';
import { searchProductsAction } from '../../redux/saga/searchInput/search.action';

const drawerWidth = 200;

export default function Sidebar({ setFilter, products, filteredProducts }) {
  const [tags, setTags] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchInput, setSearchInput] = useState('');


  const dispatch = useDispatch();
  const getProductsFromState = useSelector((state) => state.ProductSlice.products);


  useEffect(() => {
    fetch("http://localhost:3003/api/tags")
      .then((data) => data.json())
      .then((res) => setTags(res))
      .catch(console.error);
    return () => {};
  }, []);

  useEffect(() => {
    const arr = products
      .map((category) => ({
        ...category,
        Products: category.Products.filter((product) =>
          selectedTags.every((tagId) => product.Tags.some((tag) => tag.id === Number(tagId)))
        ),
      }))
      .filter((category) => category.Products.length > 0);
    setFilter(arr);
  }, [selectedTags]);

  const handleTag = (id, checked) => {
    if (checked) {
      setSelectedTags([...selectedTags, id]);
    } else {
      setSelectedTags(selectedTags.filter((el) => el !== id));
    }
  };

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    // console.log(event.target.value, 'лог с handleSearchInput');

    dispatch(searchProductsAction({ input: event.target.value, products: getProductsFromState }));
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
