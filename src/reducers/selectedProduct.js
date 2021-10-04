import { SELECTED_PRODUCT } from '../actions/sneakers';
import { SAVE_SHOPPING_CART } from '../actions/shoppingCart';

const initialState = {
	sneaker: [],
};

const selectedProduct = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
		console.log("ACTION", action.sneaker);
		return {
			...state,
		};
	case SAVE_SHOPPING_CART:
		console.log("ACTION SAVE SHOPPING CART", action.shoppingCart);
		return {
			...state,
			sneaker: state.sneaker.concat(action.shoppingCart)
		};
	default:
      return state;
  }
};

export default selectedProduct;
