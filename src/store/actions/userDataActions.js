import CONSTANT from '../constants';

export const login = (payload) => ({
  type: CONSTANT.LOGIN,
  payload
});

export const logout = () => ({
  type: CONSTANT.LOGOUT
});