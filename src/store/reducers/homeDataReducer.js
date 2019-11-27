import CONSTANTS from '../constants';

const initialState = {
  listCategoryLvl1: [],
  listCategoryLvl2: [],
  listProduct: [],
  pending: false,
  error: false
};

const homeDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_LIST_CATEGORY_LVL1:
    case CONSTANTS.GET_LIST_CATEGORY_LVL2:
    case CONSTANTS.GET_RECOMMEND_PRODUCT:
      return {
        ...state,
        pending: true
      };
    case CONSTANTS.GET_LIST_CATEGORY_LVL1_SUCCEED:
      return {
        ...state,
        listCategoryLvl1: action.payload,
        pending: false,
        error: false
      };

    case CONSTANTS.GET_LIST_CATEGORY_LVL2_SUCCEED:
      return {
        ...state,
        listCategoryLvl2: action.payload,
        pending: false,
        error: false
      };

    case CONSTANTS.GET_LIST_CATEGORY_LVL1_FAILED:
    case CONSTANTS.GET_LIST_CATEGORY_LVL2_FAILED:
    case CONSTANTS.GET_RECOMMEND_PRODUCT_FAILED:
      return {
        ...state,
        pending: false,
        error: true
      };

    case CONSTANTS.GET_RECOMMEND_PRODUCT_SUCCEED:
      return {
        ...state,
        listProduct: [...state.listProduct, ...action.payload],
        pending: false,
        error: false
      };

    default:
      return state;
  }
};

export default homeDataReducer;