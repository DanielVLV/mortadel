export const productsFetch = async () => {
  try {
    const res = await fetch('http://localhost:3003/api/products');
    const products = await res.json();
    return products;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const foo = () => {};