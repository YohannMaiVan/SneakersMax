import { SELECTED_PRODUCT } from '../actions/sneakers';

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
	default:
      return state;
  }
};

export default selectedProduct;
