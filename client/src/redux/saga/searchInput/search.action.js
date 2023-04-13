/* eslint-disable import/prefer-default-export */
import { INPUT_CHANGE } from './type.searchInput';

export const searchProductsAction = (text) => ({ type: INPUT_CHANGE, payload: text });
