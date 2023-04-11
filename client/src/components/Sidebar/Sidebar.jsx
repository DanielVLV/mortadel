import * as React from 'react';
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <FormControlLabel control={<Checkbox />} label={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
    </Box>
  );
}
