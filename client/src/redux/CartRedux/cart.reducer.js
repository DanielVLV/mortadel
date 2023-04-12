/* eslint-disable default-param-last */
/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import { ADD_TO_CART } from "../redux.types";

const initialState = {
  cart: [],
};

export const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    default:
      return state;
  }
};
