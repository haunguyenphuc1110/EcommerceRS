import CONSTANTS from '../constants';

const initialState = {
  pending: false,
  error: false,
  userId: '',
  viewedProducts: [],
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOGIN:
      return {
        ...state,
        pending: true,
        error: false
      };

    case CONSTANTS.LOGIN_SUCCEED:
    case CONSTANTS.LOGIN_FACEBOOK:
      return {
        ...state,
        pending: false,
        error: false,
        userId: action.payload
      }
    case CONSTANTS.LOGIN_FAILED:
      return {
        ...state,
        pending: false,
        error: true,
      }
    
    case CONSTANTS.LOGOUT:
      return {
        ...state,
        userId: '',
        pending: false,
        error: false
      }

    case CONSTANTS.SAVE_VIEWED_PRODUCT:
      return {
        ...state,
        viewedProducts: state.viewedProducts.concat(action.payload)
      };

    default:
      return state;
  }
};

export default userDataReducer;