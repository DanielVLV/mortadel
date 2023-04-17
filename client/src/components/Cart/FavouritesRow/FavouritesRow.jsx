/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useDispatch, useSelector } from "react-redux";
import { addIntoCart } from "../../../redux/CartRedux/cart.actions";

function FavouritesRow({ favProduct, setFavs, el }) {
  const products = useSelector((state) => state.ProductSlice.products);
  const favId = el.id;
  const dispatch = useDispatch();
  const handleFavDelete = async () => {
    try {
      const res = await fetch("http://localhost:3003/api/favs", {
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favId }),
      });
      if (res.status === 200) {
        setFavs((prev) => prev.filter((elem) => elem.id !== favId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickAddToCart = () => {
    dispatch(addIntoCart(favProduct));
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
                image={favProduct.img}
                alt=""
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" align="center">
                  {favProduct.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" align="center">
                  {favProduct.description}
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
            <Button
              onClick={handleFavDelete}
              variant="contained"
              endIcon={<StarHalfIcon />}
            >
              Удалить из избранного
            </Button>

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

export default FavouritesRow;
