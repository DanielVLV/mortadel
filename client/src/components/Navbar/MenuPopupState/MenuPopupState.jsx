/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './menuPopupState.css';

export default function MenuPopupState() {

  const categoriesArr = useSelector((state) => state.ProductSlice.products);
  // const categoriesArrProps = [];
  // categoriesArr?.map((el) => categoriesArrProps.push(el.categoryName));



  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button sx={{ bgcolor: 'red' }} variant="contained" {...bindTrigger(popupState)}>
            <DensityMediumIcon />
          </Button>
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
