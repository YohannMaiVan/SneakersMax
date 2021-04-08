import { GET_SNEAKERS } from '../actions/sneakers';

const initialState = {
	sneakers: [
		
		
	]
};

const products = (state = initialState, action = {}) => {
  switch (action.type) {
	case GET_SNEAKERS:
		console.log("action GETSNEAKERS", action.sneakers);
		return {
			...state,
			sneakers: ...action.sneakers
			};
    default:
      return state;
  }
};

export default products;

// sneakers: action.sneakers.map((sneaker) => (
