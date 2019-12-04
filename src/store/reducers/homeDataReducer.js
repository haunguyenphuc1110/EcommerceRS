import CONSTANTS from '../constants';

const initialState = {
  listCategoryLvl1: [],
  listCategoryLvl2: [],
  listProduct: [],
  viewedProducts: [],
  pending: false,
  error: false,
  numberOfRequests: 0
};

const homeDataReducer = (state = initialState, action) => {

  const numberOfRequests = state.numberOfRequests;
  const increasedRequests = numberOfRequests + 1;
  const decreasedRequests = numberOfRequests > 0 ? numberOfRequests -  1 : 0; // if number of requests is zero, the global loading will be hidden

  switch (action.type) {
    case CONSTANTS.GET_LIST_CATEGORY_LVL1:
    case CONSTANTS.GET_LIST_CATEGORY_LVL2:
    case CONSTANTS.GET_RECOMMEND_PRODUCT:
      return {
        ...state,
        numberOfRequests: increasedRequests,
        pending: true
      };

    case CONSTANTS.SAVE_VIEWED_PRODUCT:
      return {
        ...state,
        viewedProducts: state.viewedProducts.concat(action.payload)
      };

    case CONSTANTS.GET_LIST_CATEGORY_LVL1_SUCCEED:
      return {
        ...state,
        listCategoryLvl1: action.payload,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };

    case CONSTANTS.GET_LIST_CATEGORY_LVL2_SUCCEED:
      return {
        ...state,
        listCategoryLvl2: action.payload,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };

    case CONSTANTS.GET_RECOMMEND_PRODUCT_SUCCEED:
      return {
        ...state,
        listProduct: [...state.listProduct, ...action.payload],
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };

    case CONSTANTS.GET_LIST_CATEGORY_LVL1_FAILED:
    case CONSTANTS.GET_LIST_CATEGORY_LVL2_FAILED:
    case CONSTANTS.GET_RECOMMEND_PRODUCT_FAILED:
      return {
        ...state,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: true
      };

    default:
      return state;
  }
};

export default homeDataReducer;