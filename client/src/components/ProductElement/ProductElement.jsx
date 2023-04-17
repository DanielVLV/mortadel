/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";
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
import { selectOneProduct } from "../../redux/product.slice";

function ProductElement({ product, setOpen }) {
  const user = useSelector((state) => state.UserSlice.value);
  const productId = product.id;
  // const handleClick = () => {
  //   console.log("productproductproduct", product.id);
  // };
  const dispatch = useDispatch();

  const handleAddToFavs = async () => {
    await fetch("http://localhost:3003/api/favs", {
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
    <Card sx={{ width: 800 }}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia sx={{ height: 140 }} image={product.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={handleClickOpen}>
          Купить
        </Button>
        <Button size="small" onClick={handleClickAddToCart}>
          В корзину
        </Button>
        {user && (
          <Button
            onClick={handleAddToFavs}
            variant="outlined"
            endIcon={<StarHalfIcon />}
          >
            В избранное
          </Button>
        )}
      </CardActions>
      {/* <ModalWindow open={open} setOpen={setOpen} product={product} /> */}
    </Card>
  );
}

export default ProductElement;
