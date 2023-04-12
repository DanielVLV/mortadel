/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MenuPopupState() {

  const categoriesArr = useSelector((state) => state.ProductSlice.products);
  const categoriesArrProps = [];
  categoriesArr?.map((el) => categoriesArrProps.push(el.categoryName));



  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Продукция попап
          </Button>
          <Menu {...bindMenu(popupState)}>
            {categoriesArrProps?.map((el, index) => (
              <MenuItem key={index} sx={{ height: '36px', width: '400px' }} onClick={popupState.close}>
                <Link sx={{ padding: 0 }} to={`/categories/${index}`}>{el}</Link>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
