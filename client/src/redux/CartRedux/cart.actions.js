/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import {
  ADD_TO_CART,
  CREATE_UNIQUE_CART,
  REMOVE_FROM_CART,
} from "../redux.types";

export const addIntoCart = (data) => {
  return { type: ADD_TO_CART, payload: data };
};

export const removeFromCart = (index) => {
  return { type: REMOVE_FROM_CART, payload: index };
};
export const createUniqueCart = (data) => {
  return { type: CREATE_UNIQUE_CART, payload: data };
};
