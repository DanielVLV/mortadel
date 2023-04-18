/* eslint-disable max-len */
/* eslint-disable default-param-last */
/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import { ADD_TO_CART, CREATE_UNIQUE_CART, REMOVE_FROM_CART } from "../redux.types";

const initialState = {
  cart: [],
  uniqueCart: [],
};

export const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case CREATE_UNIQUE_CART:
      return { ...state, uniqueCart: state.cart.filter((obj, index, self) => index === self.findIndex((t) => t.id === obj.id && t.name === obj.name)) };
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
