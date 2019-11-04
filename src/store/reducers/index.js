import { combineReducers } from 'redux';
import homeDataReducer from './homeDataReducer';

export default combineReducers({
  homeReducer: homeDataReducer
});