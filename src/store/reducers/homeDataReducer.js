import CONSTANTS from '../constants';

const initialState = {
  listCategoryLvl1: [],
  listCategoryLvl2: [],
  listProduct: [],
  listProductFullMode: [],
  pending: false,
  error: false,
  numberOfRequests: 0,
  shouldReload: false
};

const homeDataReducer = (state = initialState, action) => {

  const numberOfRequests = state.numberOfRequests;
  const increasedRequests = numberOfRequests + 1;
  const decreasedRequests = numberOfRequests > 0 ? numberOfRequests - 1 : 0; // if number of requests is zero, the global loading will be hidden

  switch (action.type) {
    case CONSTANTS.GET_LIST_CATEGORY_LVL1:
    case CONSTANTS.GET_LIST_CATEGORY_LVL2:
    case CONSTANTS.GET_RECOMMEND_PRODUCT:
    case CONSTANTS.GET_MAYBE_LIKE_PRODUCT:
      return {
        ...state,
        numberOfRequests: increasedRequests,
        pending: true
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

    case CONSTANTS.GET_MAYBE_LIKE_PRODUCT_SUCCEED:
      return {
        ...state,
        listProductFullMode: action.payload,
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

    case CONSTANTS.GET_RECOMMEND_PRODUCT_REGISTERED_USER_SUCCEED:
      return {
        ...state,
        listProduct: action.payload,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: false
      };

    case CONSTANTS.GET_LIST_CATEGORY_LVL1_FAILED:
    case CONSTANTS.GET_LIST_CATEGORY_LVL2_FAILED:
    case CONSTANTS.GET_RECOMMEND_PRODUCT_FAILED:
    case CONSTANTS.GET_MAYBE_LIKE_PRODUCT_FAILED:
      return {
        ...state,
        numberOfRequests: decreasedRequests,
        pending: decreasedRequests > 0,
        error: true
      };

    case CONSTANTS.SET_SHOULD_RELOAD:
      return {
        ...state,
        shouldReload: action.payload
      }

    default:
      return state;
  }
};

export default homeDataReducer;