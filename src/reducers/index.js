import { combineReducers } from 'redux';
import counter from './counter';
import products from './products';

export default combineReducers({
  counter,
  products
});
