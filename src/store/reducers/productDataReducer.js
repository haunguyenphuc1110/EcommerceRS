import CONSTANTS from '../constants';

const initialState = {
  listRelatedProduct: [],
  pending: false,
  error: false
};

const productDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_LIST_RELATED_PRODUCT:
      return {
        ...state,
        pending: true
      };

    case CONSTANTS.GET_LIST_RELATED_PRODUCT_SUCCEED:
      return {
        ...state,
        listRelatedProduct: action.payload,
        pending: false,
        error: false
      };

    case CONSTANTS.GET_LIST_RELATED_PRODUCT_FAILED:
      return {
        ...state,
        pending: false,
        error: true
      };

    default:
      return state;
  }
};

export default productDataReducer;