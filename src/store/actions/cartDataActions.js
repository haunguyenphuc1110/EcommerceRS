import CONSTANTS from '../constants';

export const addProductToCart = (payload) => ({
  type: CONSTANTS.ADD_PRODUCT_CART,
  payload
});