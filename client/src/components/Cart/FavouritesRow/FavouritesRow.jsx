/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function FavouritesRow({ product }) {
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
                image={product["Product.img"]}
                alt=""
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" align="center">
                  {product["Product.title"]}
                </Typography>
                <Typography variant="h6" color="text.secondary" align="center">
                  {product["Product.description"]}
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
            //   onClick={handleAddToFavs}
              variant="contained"
              endIcon={<StarHalfIcon />}
            >
              Удалить из избранного
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

export default FavouritesRow;
