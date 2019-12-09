import CONSTANTS from '../constants';

export const getRelatedProduct = (payload) => ({
  type: CONSTANTS.GET_LIST_RELATED_PRODUCT,
  payload
});