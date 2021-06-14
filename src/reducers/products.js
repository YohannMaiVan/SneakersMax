import { GET_SNEAKERS } from '../actions/sneakers';

const initialState = {
		AirJordan1: {
			Brand: "",
			Quantity: "",
			Price: "",
		},
		QuestionMid: {
			Brand: "",
			Quantity: "",
			Price: "",
		},
		Yeezy700V2: {
			Brand: "",
			Quantity: "",
			Price: "",
		},
};

const products = (state = initialState, action = {}) => {
  switch (action.type) {
	case GET_SNEAKERS:
		console.log("action GETSNEAKERS", action.sneakers);

		return {
			...state,
			AirJordan1: {
			Brand: action.sneakers.AirJordan1.brand,
			Quantity: action.sneakers.AirJordan1.quantity,
			Price: action.sneakers.AirJordan1.price,
			},
			QuestionMid: {
				Brand: action.sneakers.QuestionMid.brand,
				Quantity: action.sneakers.QuestionMid.quantity,
				Price: action.sneakers.QuestionMid.price,
			},
			Yeezy700V2: {
				Brand: action.sneakers.Yeezy700V2.brand,
				Quantity: action.sneakers.Yeezy700V2.quantity,
				Price: action.sneakers.Yeezy700V2.price,
			}
		};
    default:
      return state;
  }
};

export default products;

// sneakers: action.sneakers.map((sneaker) => (
