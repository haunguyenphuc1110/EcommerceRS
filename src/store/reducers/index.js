import { combineReducers } from 'redux';
import homeDataReducer from './homeDataReducer';
import categoryDataReducer from './categoryDataReducer';
import cartDataReducer from './cartDataReducer';

export default combineReducers({
  homeReducer: homeDataReducer,
  categoryReducer: categoryDataReducer,
  cartReducer: cartDataReducer
});