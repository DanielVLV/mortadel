import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, throttle,
} from '@redux-saga/core/effects';
// import { useSelector } from 'react-redux';
import { INPUT_CHANGE, SET_FILTERED_PRODUCTS } from './searchInput/type.searchInput';

const selectFilteredProducts = (payload) => {
  // payload.input - строка для фильтра
  // const result = payload.products.map((el) => el.Products
  //   .map((product) => {
  //     if (product.title.toLowerCase().includes(payload.input.toLowerCase())) {
  //       return product.title;
  //     }
  //     return undefined;
  //   }));
  // const result2 = result.map((el) => el
  //   .filter((elem) => elem !== undefined));

  // const result3 = [];
  // result2.forEach((element) => (element.length > 0
  //   ? result3.push(element) : null));

  // console.log(result3);
  // return result3;


  // console.log(payload.products)
  const filteredTitles = payload.products.flatMap((el) => el.Products
    .filter((product) => product.title.toLowerCase().includes(payload.input.toLowerCase()))
    .map((product) => product.title));


  function filterProductsByTitle(originalArray, titlesArray) {
    const filteredArray = JSON.parse(JSON.stringify(originalArray));
    for (let i = 0; i < filteredArray.length; i += 1) {
      for (let j = 0; j < filteredArray[i].Products.length; j += 1) {
        const productTitle = filteredArray[i].Products[j].title;
        if (!titlesArray.includes(productTitle)) {
          filteredArray[i].Products.splice(j, 1);
          j -= 1;
        }
      }
    }
    return filteredArray.filter((category) => category.Products.length > 0);
  }

  const finalArray = filterProductsByTitle(payload.products, filteredTitles);

  console.log(finalArray);
  return finalArray;
};

function* searchWorker(action) {
  try {
    const filteredProducts = yield call(selectFilteredProducts, action.payload);
    yield put({ type: SET_FILTERED_PRODUCTS, payload: filteredProducts });
  } catch (error) {
    console.error({ msg: error.message });
  }
}

export default function* productWatcher() {
  // yield takeEvery(INPUT_CHANGE, searchWorker);
  yield throttle(500, INPUT_CHANGE, searchWorker);
}
