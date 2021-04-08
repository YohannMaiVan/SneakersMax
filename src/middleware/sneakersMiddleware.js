import { FETCH_SNEAKERS, getSneakers } from '../actions/sneakers';
import axios from 'axios';
import { baseURL } from 'src/config';

const sneakersMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case FETCH_SNEAKERS:
			axios.get(`${baseURL}`, {}, { withCredentials: true })
			.then((response) => {
			console.log('tableau de données recu : ', response.data);
			store.dispatch(getSneakers(response.data));
			next(action);
			})
			.catch((error) => {
			console.error(error);
			});
			break;
		default:
			next(action);
			break;
	}
	

  };
  
  export default sneakersMiddleware;