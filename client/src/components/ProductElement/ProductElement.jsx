/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { addIntoCart } from "../../redux/CartRedux/cart.actions";
import { addFav, selectOneProduct } from "../../redux/product.slice";

import { domainAddress } from "../../constants/api";


function ProductElement({ product, setOpen, setFavs, allFavs, loading }) {
  const user = useSelector((state) => state.UserSlice.value);
  const productId = product.id;

  const dispatch = useDispatch();

  const [isInFav, setIsInFav] = useState(false);

  useEffect(() => {
    setIsInFav(Boolean(allFavs.find((el) => el.productId === product.id)));
  }, [loading]);

  const favObj = allFavs.find((el) => el.productId === productId);
  const favId = favObj?.id;

  const handleAddToFavs = async () => {
    try {
      const res = await fetch(`${domainAddress}/api/favs`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, user }),
      });
      const result = await res.json();
      setFavs((prev) => [...prev, result[0]]);
      setIsInFav((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFavDelete = async () => {
    try {
      const res = await fetch(`${domainAddress}/api/favs`, {
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favId }),
      });
      if (res.status === 200) {
        setFavs((prev) => [...prev].filter((elem) => elem.id !== favId));
        setIsInFav((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    dispatch(selectOneProduct({ product }));
    setOpen(true);
  };

  const handleClickAddToCart = () => {
    dispatch(addIntoCart(product));
  };

  return (
    <Card
      sx={{
        width: 800,
        backgroundColor: 'rgba(67, 71, 92, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 0 60px var(--metal)',
        borderRadius: '20px',
        // padding: '15px',
        "&:hover": {
          transform: "translateY(-10px)",
          transition: "transform 0.2s ease-in-out",
          boxShadow: "3px 3px 10px rgba(54, 54, 54, 0.669)",
        },
      }}
    >
      <CardActionArea
        onClick={handleClickOpen}
        sx={{ minHeight: '335px' }}
      >
        <CardMedia
          sx={{ height: 180, borderRadius: '20px' }}
          image={product.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ minHeight: '36px', display: 'flex', justifyContent: 'space-between' }}
      >
        <Button size="small" onClick={handleClickAddToCart}>
          В корзину
        </Button>
        {user &&
          (isInFav ? (
            <Button
              sx={{ fontSize: '12px' }}
              onClick={handleFavDelete}
              variant="contained"
              endIcon={<StarHalfIcon />}
            >
              Удалить из избранного
            </Button>
          ) : (
            <Button
              sx={{ }}
              onClick={handleAddToFavs}
              variant="outlined"
              endIcon={<StarHalfIcon />}
            >
              В избранное
            </Button>
          ))}
      </CardActions>
      {/* <ModalWindow open={open} setOpen={setOpen} product={product} /> */}
    </Card>
  );
}

export default ProductElement;
