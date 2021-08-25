import { GET_SNEAKERS } from '../actions/sneakers';

const initialState = {
};

const products = (state = initialState, action = {}) => {
  switch (action.type) {
	case GET_SNEAKERS:
		console.log("action GETSNEAKERS", action.sneakers);

		return {
			...state,
			AirJordan1: {
			Brand: action.sneakers.AirJordan1.brand,
			Model: action.sneakers.AirJordan1.model,
			Quantity: action.sneakers.AirJordan1.quantity,
			Price: action.sneakers.AirJordan1.price,
			Image: action.sneakers.AirJordan1.image
			},
			QuestionMid: {
				Brand: action.sneakers.QuestionMid.brand,
				Model: action.sneakers.QuestionMid.model,
				Quantity: action.sneakers.QuestionMid.quantity,
				Price: action.sneakers.QuestionMid.price,
				Image: action.sneakers.QuestionMid.image
			},
			Yeezy700V2: {
				Brand: action.sneakers.Yeezy700V2.brand,
				Model: action.sneakers.Yeezy700V2.model,
				Quantity: action.sneakers.Yeezy700V2.quantity,
				Price: action.sneakers.Yeezy700V2.price,
				Image: action.sneakers.Yeezy700V2.image
			},
			AirMax90: {
				Brand: action.sneakers.AirMax90.brand,
				Model: action.sneakers.AirMax90.model,
				Quantity: action.sneakers.AirMax90.quantity,
				Price: action.sneakers.AirMax90.price,
				Image: action.sneakers.AirMax90.image
				},
			Huarache: {
					Brand: action.sneakers.Huarache.brand,
					Model: action.sneakers.Huarache.model,
					Quantity: action.sneakers.Huarache.quantity,
					Price: action.sneakers.Huarache.price,
					Image: action.sneakers.Huarache.image
				},
			Pumax2KCollection: {
					Brand: action.sneakers.Pumax2KCollection.brand,
					Model: action.sneakers.Pumax2KCollection.model,
					Quantity: action.sneakers.Pumax2KCollection.quantity,
					Price: action.sneakers.Pumax2KCollection.price,
					Image: action.sneakers.Pumax2KCollection.image
				}
		};
    default:
      return state;
  }
};

export default products;

// sneakers: action.sneakers.map((sneaker) => (
