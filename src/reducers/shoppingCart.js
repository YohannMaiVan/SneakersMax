import { ADD_SHOPPING_CART } from '../actions/shoppingCart';

const initialState = {
	shoppingCart: 0,
  test: "test"
};

const shoppingCart = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart + 1,
      };
    default:
      return state;
  }
};

export default shoppingCart;
