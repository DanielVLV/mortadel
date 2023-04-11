import React from 'react';
// import { Outlet } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';

const arr = [
  {
    id: 1,
    categoryName: 'Варено - копченые колбасы',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 2,
    categoryName: 'Сырокопченые колбасы',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 3,
    categoryName: 'Полукопченые колбасы',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 4,
    categoryName: 'Вареные колбасы в натуральной оболочке',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 5,
    categoryName: 'Вареные колбасы в оболочке из целлофана',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 6,
    categoryName: 'Вареные колбасаы в оболочке из полиамида',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 7,
    categoryName: 'Сосиски',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 8,
    categoryName: 'Шпикачки и сардельки',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 9,
    categoryName: 'Мясные деликатесы',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
  {
    id: 10,
    categoryName: 'Тушенка',
    createdAt: '2023-04-11T14:07:11.510Z',
    updatedAt: '2023-04-11T14:07:11.510Z',
  },
];

function Products() {
  return (
    <Box style={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {arr.map((el) => (
          <Card key={el.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.categoryName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Купить</Button>
              <Button size="small">В корзину</Button>
            </CardActions>
          </Card>
        ))}

      </Box>
    </Box>
  );
}


export default Products;






