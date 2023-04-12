/* eslint-disable default-param-last */
/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import { ADD_TO_CART, REMOVE_FROM_CART } from "../redux.types";

const initialState = {
  cart: [],
};

export const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.slice(0, payload),
          ...state.cart.slice(payload + 1),
        ],
      };
    default:
      return state;
  }
};
