import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ProductElement({ elem }) {
  return (
    elem?.map((el) => (
      <Card key={el.id} sx={{ width: 800 }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 140 }}
            image={el.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {el.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Купить</Button>
          <Button size="small">В корзину</Button>
        </CardActions>
      </Card>


    ))

  );
}

export default ProductElement;
