/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ModalWindow from "../ModalWindow/ModalWindow";

function ProductElement({ product }) {
  // const handleClick = () => {
  //   console.log("productproductproduct", product.id);
  // };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
        <Button size="small">Купить</Button>
        <Button size="small">В корзину</Button>
      </CardActions>
      <ModalWindow open={open} setOpen={setOpen} product={product} />
    </Card>
  );
}

export default ProductElement;
