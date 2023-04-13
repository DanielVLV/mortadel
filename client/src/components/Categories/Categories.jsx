import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import CategoryCard from './CategoryCard/CategoryCard';

function Categories() {
  const { categoryId } = useParams();
  const products = useSelector((state) => state.ProductSlice.products);
  const [filteredProducts, setFilter] = useState(null);
  return (
    <Box style={{ display: 'flex' }}>
      <Sidebar setFilter={setFilter} filteredProducts={filteredProducts} products={products} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {products[categoryId]?.Products?.map((el) => (
          <CategoryCard key={el.id} product={el} />
        ))}
      </Box>

    </Box>
  );
}

export default Categories;
