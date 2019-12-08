import CONSTANTS from '../constants';

export const login = (payload) => ({
  type: CONSTANTS.LOGIN,
  payload
});

export const loginFacebook = (payload) => ({
  type: CONSTANTS.LOGIN_FACEBOOK,
  payload
});

export const logout = () => ({
  type: CONSTANTS.LOGOUT
});

export const saveViewedProduct = (payload) => ({
  type: CONSTANTS.SAVE_VIEWED_PRODUCT,
  payload
});