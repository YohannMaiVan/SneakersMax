import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counter from './counter';
import products from './products';
import inscription from './inscription';
import connexion from './connexion';
import shoppingCart from './shoppingCart'
import selectedProduct from './selectedProduct'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['connexion']
}

const rootReducer = combineReducers({
  counter,
  products,
  inscription,
  connexion,
  shoppingCart,
  selectedProduct
});

export default persistReducer(persistConfig, rootReducer);
