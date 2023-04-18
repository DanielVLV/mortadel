/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing */
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIntoCart,
  removeFromCart,
} from "../../../redux/CartRedux/cart.actions";
import { getCart } from "../../../redux/CartRedux/cart.selectors";
import styles from "./carProduct.module.css";

function CartSingleProduct({ singleProduct, count, setUnique }) {
  const dispatch = useDispatch();

  const cartArr = useSelector(getCart);
  const hadleClickRemove = () => {
    const index = cartArr.findIndex((el) => el.id === singleProduct.id);
    dispatch(removeFromCart(index));
    // setUnique([...new Set(cartArr)]);
  };

  const handleClickAdd = () => {
    dispatch(addIntoCart(singleProduct));
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
              image={singleProduct.img}
              alt=""
            />
            <CardContent sx={{ flex: 1, m: 0 }}>
              <Typography gutterBottom variant="h5" align="center">
                {singleProduct.title}
              </Typography>
              <Typography variant="h6" color="text.secondary" align="center">
                {singleProduct.description}
              </Typography>
              <div className={styles.buttonContainer}>
                <Button
                  variant="outlined"
                  onClick={handleClickAdd}
                  sx={{ mt: 4, mr: 2 }}
                >
                  +
                </Button>
                <span>{count[singleProduct.id]}</span>
                <Button
                  variant="outlined"
                  onClick={hadleClickRemove}
                  sx={{ mt: 4, ml: 2 }}
                >
                  -
                </Button>
              </div>
            </CardContent>
          </Box>
          {/* </CardActionArea> */}
        </Box>
      </Card>
    </Box>
    // <div>
    //   <div>{singleProduct.title}</div>
    //   <div>{singleProduct.description}</div>
    //   <div>Количество: {count[singleProduct.id]}</div>
    //   <button type="button" onClick={handleClickAdd}>
    //     +
    //   </button>
    //   <button type="button" onClick={hadleClickRemove}>
    //     -
    //   </button>
    // </div>
  );
}

export default CartSingleProduct;
