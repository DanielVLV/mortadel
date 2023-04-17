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

export const favFetch = async ({ productId, user }) => {
  console.log('ewqewqeqwe');
  try {
    await fetch(`${domainAddress}/api/favs`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, user }),
    });
    return;
  } catch (err) {
    console.error(err);
  }
};


