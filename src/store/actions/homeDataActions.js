import CONSTANTS from '../constants';

export const getListCategory = () => ({
  type: CONSTANTS.GET_LIST_CATEGORY
});

export const getListItem = (payload) => ({
  type: CONSTANTS.GET_RECOMMEND_PRODUCT,
  payload
});