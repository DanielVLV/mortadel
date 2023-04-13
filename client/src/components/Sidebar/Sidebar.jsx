import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductsAction } from '../../redux/saga/searchInput/search.action';

const drawerWidth = 200;

export default function Sidebar() {

  const dispatch = useDispatch();
  const getProductsFromState = useSelector((state) => state.ProductSlice.products);

  const [tags, setTags] = useState();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:3003/api/tags')
      .then((data) => data.json())
      .then((res) => setTags(res))
      .catch(console.error);
    return () => {
    };
  }, []);

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    // console.log(event.target.value, 'лог с handleSearchInput');

    dispatch(searchProductsAction({ input: event.target.value, products: getProductsFromState }));
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { position: 'static', width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{
          overflow: 'auto',
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
                  <FormControlLabel control={<Checkbox />} label={el.tagName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
    </Box>
  );
}
