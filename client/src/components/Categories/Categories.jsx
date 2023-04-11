import React from 'react';
import { useParams } from 'react-router-dom';

function Categories() {
  const { categoryId } = useParams();
  console.log(useParams());
  console.log(categoryId, 'USEPARAMS CATEGORY ID');

  return (
    <div>
      Categories
      {categoryId}
    </div>
  );
}

export default Categories;
