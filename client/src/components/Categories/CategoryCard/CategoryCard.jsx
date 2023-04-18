/* eslint-disable no-unused-vars */
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
import { addFav } from "../../../redux/product.slice";
import { addIntoCart } from "../../../redux/CartRedux/cart.actions";

function CategoryCard({ product }) {
  const user = useSelector((state) => state.UserSlice.value);
  const productId = product.id;
  const dispatch = useDispatch();
  const handleAddToFavs = () => {
    dispatch(addFav({ productId, user }));
  };

  const handleClickAddToCart = () => {
    dispatch(addIntoCart(product));
  };

  return (
    <Box
      sx={{ mb: 1, mt: 1 }}
      style={{ border: "1px solid grey", maxWidth: 1000 }}
    >
      <Card>
        <Box style={{ display: "flex" }}>
          {/* <CardActionArea> */}
          <Box style={{ display: "flex" }}>
            <CardMedia
              sx={{
                maxWidth: 250,
                display: "flex",
              }}
              component="img"
              height="250"
              image={product?.img}
              alt=""
            />
            <CardContent sx={{ flex: 1, m: 0, width: "900px" }}>
              <Typography gutterBottom variant="h6" align="center">
                {product?.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center">
                {product?.description}
              </Typography>
              {user && (
                <Button
                  sx={{ mt: 7, mr: 3 }}
                  onClick={handleAddToFavs}
                  variant="contained"
                  endIcon={<StarHalfIcon />}
                >
                  В избранное
                </Button>
              )}
              <Button
                sx={{ mt: 7, ml: 3 }}
                variant="outlined"
                onClick={handleClickAddToCart}
              >
                В корзину
                <ShoppingCartIcon />
              </Button>
            </CardContent>
          </Box>
          {/* </CardActionArea> */}
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              width: 200,
            }}
          > */}
          {/* {user && (
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
            </Button> */}
          {/* </Box> */}
        </Box>
      </Card>
    </Box>
  );
}

export default CategoryCard;
