/* eslint-disable react/prop-types */
import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { selectOneProduct } from "../../../redux/product.slice";
import { addIntoCart } from "../../../redux/CartRedux/cart.actions";
import { domainAddress } from '../../../constants/api';

function CategoryCard({ product, setOpen }) {
  const user = useSelector((state) => state.UserSlice.value);
  const productId = product.id;
  const dispatch = useDispatch();
  const handleAddToFavs = async () => {
    await fetch(`${domainAddress}/api/favs`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, user }),
    });
  };

  const handleClickOpen = () => {
    dispatch(selectOneProduct({ product }));
    setOpen(true);
  };

  const handleClickAddToCart = () => {
    dispatch(addIntoCart(product));
  };

  return (
    <Box style={{ border: "1px solid grey" }}>
      <Card>
        <Box style={{ display: "flex" }}>
          <CardActionArea>
            <Box style={{ display: "flex" }}>
              <CardMedia
                sx={{
                  maxWidth: 140,
                  display: "flex",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              width: 200,
            }}
          >
            <Button variant="outlined" onClick={handleClickOpen}>Купить в 1 клик</Button>
            {user && (
              <Button
                onClick={handleAddToFavs}
                variant="contained"
                endIcon={<StarHalfIcon />}
              >
                В избранное
              </Button>
            )}
            <Button variant="outlined" onClick={handleClickAddToCart}>
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
