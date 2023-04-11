import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/product.slice';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useffect<<<<<<<<<<<<<<<<<<<');
    dispatch(getProducts());

    return () => {
      // console.log('unmount');
    };
  }, []);
  return (
    <div>HomePage1</div>
  );
}

export default HomePage;
