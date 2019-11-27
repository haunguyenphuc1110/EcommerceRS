import CONSTANTS from '../constants';

export const getListCategoryLvl2 = (payload) => ({
  type: CONSTANTS.GET_LIST_CATEGORY_LVL2,
  payload
});

export const getListCategoryLvl3 = (payload) => ({
  type: CONSTANTS.GET_LIST_CATEGORY_LVL3,
  payload
});

export const getListCategoryLvl2ByCategoryLvl1 = (payload) => ({
  type: CONSTANTS.GET_LIST_CATEGORY_LVL2_BY_CATEGORY_LVL1,
  payload
});

export const getListCategoryLvl3ByCategoryLvl2 = (payload) => ({
  type: CONSTANTS.GET_LIST_CATEGORY_LVL3_BY_CATEGORY_LVL2,
  payload
});

export const getTopProductCateLvl1 = (payload) => ({
  type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1,
  payload
});

export const getTopProductCateLvl2 = (payload) => ({
  type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2,
  payload
});

export const getTopProductCateLvl3 = (payload) => ({
  type: CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3,
  payload
});