/* eslint-disable import/prefer-default-export */
import { INPUT_CHANGE, UNSET_FILTERED_PRODUCTS } from './type.searchInput';

export const searchProductsAction = (text) => ({ type: INPUT_CHANGE, payload: text });

export const clearInputAction = () => ({ type: UNSET_FILTERED_PRODUCTS });
