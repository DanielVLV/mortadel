/* eslint-disable default-param-last */
import { SET_FILTERED_PRODUCTS, UNSET_FILTERED_PRODUCTS } from './type.searchInput';

const initialState = {
  filteredProducts: null,
};

function searchInputReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTERED_PRODUCTS:
      return { ...state, filteredProducts: payload };
    case UNSET_FILTERED_PRODUCTS:
      return { ...state, filteredProducts: null };
    default:
      return state;
  }
}

export default searchInputReducer;
