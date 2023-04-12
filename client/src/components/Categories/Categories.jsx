import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import CategoryCard from './CategoryCard/CategoryCard';

function Categories() {
  const { categoryId } = useParams();
  const categoriesArr = useSelector((state) => state.ProductSlice.products);

  return (
    <Box style={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {categoriesArr[categoryId]?.Products?.map((el) => (
          <CategoryCard key={el.id} product={el} />
        ))}
      </Box>

    </Box>
  );
}

export default Categories;
