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
      style={{ maxWidth: 1000 }}
    >
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
                borderRadius: '20px',
                alignSelf: "center",
              }}
              component="img"
              height="250"
              image={singleProduct.img}
              alt=""
            />
            <CardContent
              sx={{
                flex: 1,
                m: 0,
                width: "900px",
              }}
            >
              <Typography
                sx={{ fontFamily: "Montserrat, sans-serif", color: 'gold', fontSize: '30px' }}
                gutterBottom
                variant="h6"
                align="center"
              >
                {singleProduct.title}
              </Typography>
              <Typography
                sx={{ fontFamily: "Comfortaa, sans-serif", color: 'gold', fontSize: '18px' }}
                variant="body1"
                color="text.secondary"
                align="center"
              >
                {singleProduct.description}
              </Typography>
              <div className={styles.buttonContainer}>
                <Button
                  variant="outlined"
                  onClick={handleClickAdd}
                  sx={{
                    mt: 7,
                    mr: 3,
                    borderColor: 'gold',
                    color: 'gold',
                    '&:hover': {
                      backgroundColor: "rgba(82, 122, 83, 0.801)",
                      borderColor: 'gold',
                    }
                  }}
                >
                  +
                </Button>
                <span style={{ fontFamily: "Comfortaa, sans-serif", color: 'gold' }}>
                  {count[singleProduct.id]}
                </span>
                <Button
                  variant="outlined"
                  onClick={hadleClickRemove}
                  sx={{
                    mt: 7,
                    ml: 3,
                    borderColor: 'gold',
                    color: 'gold',
                    '&:hover': {
                      backgroundColor: "rgba(154, 89, 89, 0.801)",
                      borderColor: 'gold',
                    }
                  }}
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
