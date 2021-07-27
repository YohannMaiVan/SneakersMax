// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import sneakersMiddleware from '../middleware/sneakersMiddleware';
import signUpMiddleware from '../middleware/signUpMiddleware';
import signInMiddleware from '../middleware/signInMiddleware';
import { persistStore } from 'redux-persist';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    sneakersMiddleware,
    signUpMiddleware,
    signInMiddleware
    // secondMiddleware,
  ),
);

// == Store
export const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

export const persistor = persistStore(store);

// == Export
export default { store, persistor };
