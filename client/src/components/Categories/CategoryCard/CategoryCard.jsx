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
import { useSelector } from "react-redux";

function CategoryCard({ product }) {
  const user = useSelector((state) => state.UserSlice.value);
  const productId = product.id;
  const handleAddToFavs = async () => {
    const res = await fetch("http://localhost:3003/api/favs", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, user }),
    });
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
            <Button variant="outlined">Купить в 1 клик</Button>
            {user && (
              <Button
                onClick={handleAddToFavs}
                variant="contained"
                endIcon={<StarHalfIcon />}
              >
                В избранное
              </Button>
            )}
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
