import { combineReducers } from 'redux';
import homeDataReducer from './homeDataReducer';
import categoryDataReducer from './categoryDataReducer';
import cartDataReducer from './cartDataReducer';
import userDataReducer from './userDataReducer';
import searchDataReducer from './searchDataReducer';

export default combineReducers({
  homeReducer: homeDataReducer,
  categoryReducer: categoryDataReducer,
  cartReducer: cartDataReducer,
  userReducer: userDataReducer,
  searchReducer: searchDataReducer
});