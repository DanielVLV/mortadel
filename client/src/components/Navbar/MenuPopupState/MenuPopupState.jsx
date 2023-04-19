/* eslint-disable react/no-array-index-key */
import React from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './menuPopupState.css';

export default function MenuPopupState() {

  const categoriesArr = useSelector((state) => state.ProductSlice.products);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <MenuSharpIcon
            sx={{
              display: 'flex',
              bgcolor: 'transparent',
              color: 'Gold',
              '& .MuiSvgIcon-root': {
                fontSize: '100px',
              },
              '&:hover': {
                color: 'DarkOrange',
                transform: 'scale(1.2)',
                transition: 'transform 0.3s ease-in-out'
              },
            }}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            {/* <HeightTwoToneIcon /> */}
          </MenuSharpIcon>
          <Menu {...bindMenu(popupState)}>
            {categoriesArr?.map((el) => (
              <MenuItem key={el.id} sx={{ height: '36px', width: '400px' }} onClick={popupState.close}>
                <Link sx={{ padding: 0 }} to={`/categories/${el.id}`}>{el.categoryName}</Link>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
