import { GET_SNEAKERS } from '../actions/sneakers';

const initialState = {
		sneakers: {

		}
};

const products = (state = initialState, action = {}) => {
  switch (action.type) {
	case GET_SNEAKERS:
		console.log("action GETSNEAKERS", action.sneakers.QuestionMid);
		const getSneakers = {
			AirJordan1: action.sneakers.AirJordan1,
			QuestionMid: action.sneakers.QuestionMid,
			Yeezy700V2: action.sneakers.Yeezy700V2,
  }
//   const sneakers = [];

	// for ( let sneakersName in getSneakers ) {
	// 	sneakers.push(
	// 		{
	// 			sneakerName: action.sneakers[sneakersName]
	// 		}
	// 	);
	// }

	// for (const [key, value] of Object.entries(getSneakers.QuestionMid)) {
	// 	sneakers.push(
	// 		{
	// 			key: value
	// 		}
	// 	)
	// 	console.log("sneakers object entries", key, value);
	// }
	
	//const sneakers = new Map(Object.entries(action.sneakers));

	//console.log("sneakers array", sneakers)
		return {
			...state,
			sneakers: {
			AirJordan1: action.sneakers.AirJordan1,
			QuestionMid: action.sneakers.QuestionMid,
			Yeezy700V2: action.sneakers.Yeezy700V2,
			}
		};
    default:
      return state;
  }
};

export default products;

// sneakers: action.sneakers.map((sneaker) => (
