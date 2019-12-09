import CONSTANTS from '../constants';

const initialState = {
  listCategoryLvl2: [],
  listCategoryLvl3: [],
  topProductCateLvl1: [],
  topProductCateLvl2: [],
  topProductCateLvl3: [],
  pending: false,
  error: false,
  numberOfRequests: 0
};

const categoryDataReducer = (state = initialState, action) => {

  const numberOfRequests = state.numberOfRequests;
  const increasedRequests = numberOfRequests + 1;
  const decreasedRequests = numberOfRequests > 0 ? numberOfRequests -  1 : 0; // if number of requests is zero, the global loading will be hidden

  switch (action.type) {
    case CONSTANTS.GET_LIST_CATEGORY_LVL2_BY_CATEGORY_LVL1:
    case CONSTANTS.GET_LIST_CATEGORY_LVL3_BY_CATEGORY_LVL2:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3:
    case CONSTANTS.SEND_LIST_CHOSEN_CATEGORY:
      return {
        ...state,
        numberOfRequests: increasedRequests,
        pending: true
      };
    case CONSTANTS.GET_LIST_CATEGORY_LVL2_BY_CATEGORY_LVL1_SUCCEED:
      return {
        ...state,
        listCategoryLvl2: action.payload,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };
    case CONSTANTS.GET_LIST_CATEGORY_LVL3_BY_CATEGORY_LVL2_SUCCEED:
      return {
        ...state,
        listCategoryLvl3: action.payload,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };

    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1_SUCCEED:
      return {
        ...state,
        topProductCateLvl1: action.payload,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };

    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2_SUCCEED:
      return {
        ...state,
        topProductCateLvl2: action.payload,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };

    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3_SUCCEED:
      return {
        ...state,
        topProductCateLvl3: action.payload,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };

    case CONSTANTS.SEND_LIST_CHOSEN_CATEGORY_SUCCEED:
      return {
        ...state,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      }

    case CONSTANTS.GET_LIST_CATEGORY_LVL2_BY_CATEGORY_LVL1_FAILED:
    case CONSTANTS.GET_LIST_CATEGORY_LVL3_BY_CATEGORY_LVL2_FAILED:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1_FAILED:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2_FAILED:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3_FAILED:
    case CONSTANTS.SEND_LIST_CHOSEN_CATEGORY_FAILED:
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

export default categoryDataReducer;