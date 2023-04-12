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
          <Menu {...bindMenu(PopupState)}>
            <MenuItem onClick={popupState.close}><Link to="/categories">Все колбасы</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/1">Колбаса1</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/2">Колбаса2</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/3">Колбаса3</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/4">Колбаса4</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/5">Колбаса5</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/6">Колбаса6</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/7">Колбаса7</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/8">Колбаса8</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link to="/categories/9">Колбаса9</Link></MenuItem>

          </Menu>
        </>
      )}
    </PopupState>
  );
}
