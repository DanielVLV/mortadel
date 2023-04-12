/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Button,
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import StarHalfIcon from '@mui/icons-material/StarHalf';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './card.css';

function CategoryCard({ product }) {
  return (
    <Box style={{ border: '1px solid grey' }}>
      <Card>
        <Box style={{ display: 'flex' }}>
          <CardActionArea>
            <Box style={{ display: 'flex' }}>
              <CardMedia
                sx={{
                  maxWidth: 140, display: 'flex',
                }}
                component="img"
                height="140"
                image={product?.img}
                alt=""
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" align="center">
                  {product?.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" align="center">
                  {product?.description}
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            width: 200,
          }}
          >
            <Button variant="outlined">
              Купить в 1 клик
            </Button>
            <Button variant="contained" endIcon={<StarHalfIcon />}>
              В избранное
            </Button>
            <Button variant="outlined">
              В корзину
              <ShoppingCartIcon />
            </Button>

          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default CategoryCard;
