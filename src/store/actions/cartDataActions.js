import CONSTANTS from '../constants';

export const addProductToCart = (payload) => ({
  type: CONSTANTS.ADD_PRODUCT_CART,
  payload
});

export const addExistProductToCart = (payload) => ({
  type: CONSTANTS.ADD_EXIST_PRODUCT_CART,
  payload
});