import React from 'react';
import { useSelector } from 'react-redux';


import { Box } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import ProductElement from '../ProductElement/ProductElement';

function Products() {
  const products = useSelector((state) => state.ProductSlice.products);

  return (
    <Box style={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {products?.map((el) => (
          <>
            <h2 key={el.id}>{el.categoryName}</h2>
            <ProductElement elem={el.Products} />
          </>
        ))}

      </Box>
    </Box>
  );
}


export default Products;






