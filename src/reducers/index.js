import { combineReducers } from 'redux';
import counter from './counter';
import products from './products';
import inscription from './inscription';

export default combineReducers({
  counter,
  products,
  inscription
});
