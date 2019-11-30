import CONSTANTS from '../constants';

const initialState = {
  pending: false,
  error: false,
  userId: ''
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

    default:
      return state;
  }
};

export default userDataReducer;