import CONSTANTS from '../constants';

export const addProductToCart = (payload) => ({
  type: CONSTANTS.ADD_PRODUCT_CART,
  payload
});

export const addExistProductToCart = (payload) => ({
  type: CONSTANTS.ADD_EXIST_PRODUCT_CART,
  payload
});

export const removeProductCart = (payload) => ({
  type: CONSTANTS.REMOVE_PRODUCT_CART,
  payload
});

export const updateCartQuantity = (payload) => ({
  type: CONSTANTS.UPDATE_CART_QUANTITY,
  payload
});

export const updateTotalPrice = (payload) => ({
  type: CONSTANTS.UPDATE_TOTAL_PRICE,
  payload
});