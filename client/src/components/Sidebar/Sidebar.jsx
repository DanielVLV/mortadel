import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';

const drawerWidth = 200;

export default function Sidebar() {

  const [tags, setTags] = useState();

  useEffect(() => {
    fetch('http://localhost:3003/api/tags')
      .then((data) => data.json())
      .then((res) => setTags(res))
      .catch(console.error);
    return () => {
    };
  }, []);

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
              label="Поиск по товарам"
              placeholder="Теги"
              multiline
              size="small"
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
