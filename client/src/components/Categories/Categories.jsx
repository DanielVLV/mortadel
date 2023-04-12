import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Categories() {
  const { categoryId } = useParams();
  const categoriesArr = useSelector((state) => state.ProductSlice.products);
  // const categoriesArrProps = ;
  // categoriesArr?.map((el) => categoriesArrProps.push(el.Products[categoryId]));
  console.log(categoriesArr && categoriesArr[categoryId].Products);

  return (
  // {categoriesArr[categoryId].Products.map(el) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  // )
  // }

  );
}

export default Categories;
