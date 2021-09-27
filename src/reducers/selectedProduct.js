import { SELECTED_PRODUCT } from '../actions/sneakers';
import { SAVE_SHOPPING_CART } from '../actions/shoppingCart';

const initialState = {
	selectedProduct: {
			Brand: "",
			Model: "",
			Quantity: "",
			Price: "",
			Image: ""
	}
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
	default:
      return state;
  }
};

export default selectedProduct;
