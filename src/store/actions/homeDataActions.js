import CONSTANTS from '../constants';

export const getListCategoryLvl1 = () => ({
  type: CONSTANTS.GET_LIST_CATEGORY_LVL1
});

export const getListCategoryLvl2 = () => ({
  type: CONSTANTS.GET_LIST_CATEGORY_LVL2
});

export const getListItem = (payload) => ({
  type: CONSTANTS.GET_RECOMMEND_PRODUCT,
  payload
});

export const saveViewedProduct = (payload) => ({
  type: CONSTANTS.SAVE_VIEWED_PRODUCT,
  payload
});