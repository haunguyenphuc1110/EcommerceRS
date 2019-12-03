import CONSTANTS from '../constants';

const initialState = {
  listProduct: [],
  pending: false,
  error: false
};

const searchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SEARCH:
      return {
        ...state,
        pending: true
      };

    case CONSTANTS.SEARCH_SUCCEED:
      return {
        ...state,
        listProduct: action.payload,
        pending: false,
        error: false
      };

    case CONSTANTS.SEARCH_FAILED:
      return {
        ...state,
        pending: false,
        error: true
      };

    default:
      return state;
  }
};

export default searchDataReducer;