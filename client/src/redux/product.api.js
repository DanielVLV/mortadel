import { domainAddress } from '../constants/api';

export const productsFetch = async () => {
  try {
    const res = await fetch(`${domainAddress}/api/products`);
    const products = await res.json();
    return products;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const foo = () => {};
