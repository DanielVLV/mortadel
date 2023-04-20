/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useDispatch, useSelector } from "react-redux";
import {
  addIntoCart,
  createUniqueCart,
} from "../../../redux/CartRedux/cart.actions";
import { domainAddress } from "../../../constants/api";

function FavouritesRow({ favProduct, setFavs, el }) {
  const products = useSelector((state) => state.ProductSlice.products);
  const favId = el.id;
  const dispatch = useDispatch();
  const handleFavDelete = async () => {
    try {
      const res = await fetch(`${domainAddress}/api/favs`, {
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
    dispatch(createUniqueCart());
  };
  return (
    <Box sx={{ mb: 1, mt: 1 }} style={{ maxWidth: 1000 }}>
      <Card
        sx={{
          backgroundColor: "rgba(67, 71, 92, 0.3)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 60px var(--metal)",
          borderRadius: "20px",
        }}
      >
        <Box style={{ display: "flex" }}>
          {/* <CardActionArea> */}
          <Box style={{
            display: "flex",
            backgroundColor: "rgba(67, 71, 92, 0.801)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 60px var(--metal)",
            borderRadius: "20px",
          }}
          >
            <CardMedia
              sx={{
                maxWidth: 250,
                display: "flex",
              }}
              component="img"
              height="250"
              image={favProduct.img}
              alt=""
            />
            <CardContent sx={{ flex: 1, m: 0, width: "900px" }}>
              <Typography
                sx={{ fontFamily: "Montserrat, sans-serif", fontSize: '30px', color: 'gold' }}
                gutterBottom
                variant="h6"
                align="center"
              >
                {favProduct.title}
              </Typography>
              <Typography
                sx={{ fontFamily: "Comfortaa, sans-serif", fontSize: '16px', color: 'gold' }}
                variant="body1"
                color="text.secondary"
                align="center"
              >
                {favProduct.description}
              </Typography>
              <CardActions sx={{
                minHeight: "36px",
                display: "flex",
                justifyContent: "space-around",
              }}
              >
                <Button
                  sx={{
                    mt: 4,
                    ml: 2,
                    fontFamily: "Lato Medium sans-serif",
                    borderColor: 'gold',
                    color: 'gold',
                    '&:hover': {
                      backgroundColor: "rgba(82, 122, 83, 0.801)",
                      borderColor: 'gold',
                    }
                  }}
                  variant="outlined"
                  onClick={handleClickAddToCart}
                >
                  В корзину
                  <ShoppingCartIcon />
                </Button>
                <Button
                  sx={{
                    mt: 4,
                    mr: 2,
                    fontFamily: "Lato Medium sans-serif",
                    color: 'gold',
                    borderColor: 'gold',
                    '&:hover': {
                      backgroundColor: "rgba(154, 89, 89, 0.801)",
                      borderColor: 'gold',
                    }
                  }}
                  variant="outlined"
                  onClick={handleFavDelete}
                  endIcon={<StarHalfIcon />}
                >
                  Удалить из избранного
                </Button>
              </CardActions>
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
          /> */}
        </Box>
      </Card>
    </Box>
  );
}

export default FavouritesRow;
