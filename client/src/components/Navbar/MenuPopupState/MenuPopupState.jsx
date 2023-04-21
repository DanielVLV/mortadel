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
    <PopupState
      sx={{
        borderRadius: "12px",
      }}
      variant="popover"
      popupId="demo-popup-menu"
    >
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
          />
          <Menu
            sx={{
              '&>.MuiPaper-root': {
                backgroundColor: "rgba(64, 64, 64, 0.958)",
                borderRadius: "12px",
                '&>ul>li': {
                  maxWidth: '100%',
                  padding: 0,
                },
                '&>ul>li:hover': {
                  backgroundColor: 'rgba(112, 128, 144, 0.958)'
                },
                '&>ul>li>a': {
                  margin: 0,
                  minWidth: '400px'
                }
              }
            }}
            {...bindMenu(popupState)}
          >
            {categoriesArr?.map((el) => (
              <MenuItem
                key={el.id}
                sx={{
                  height: '36px',
                  width: '400px',
                  '&>*': {
                    fontFamily: 'Lato Medium, sans-serif',
                    color: 'gold',
                    maxWidth: '100%',
                  },
                }}
                onClick={popupState.close}
              >
                <Link
                  sx={{
                    padding: 0,
                    maxWidth: '100%',
                    margin: 0,
                  }}
                  to={`/categories/${el.id}`}
                >
                  {el.categoryName}

                </Link>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
