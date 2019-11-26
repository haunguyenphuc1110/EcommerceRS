import { combineReducers } from 'redux';
import homeDataReducer from './homeDataReducer';
import categoryDataReducer from './categoryDataReducer';

export default combineReducers({
  homeReducer: homeDataReducer,
  categoryReducer: categoryDataReducer
});