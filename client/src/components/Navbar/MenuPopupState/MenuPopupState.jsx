import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Продукция попап
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link to="/products">Products</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/products">Products</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/products">Products</Link></MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
