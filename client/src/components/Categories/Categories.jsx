import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Categories() {
  const { categoryId } = useParams();
  const categoriesArr = useSelector((state) => state.ProductSlice.products);
  const categoriesArrProps = [];
  categoriesArr?.map((el) => categoriesArrProps.push(el.categoryName));

  return (
    <div>
      {categoriesArrProps[categoryId]}
    </div>
  );
}

export default Categories;
