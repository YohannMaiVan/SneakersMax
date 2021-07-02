/* eslint-disable no-case-declarations */
import { SUBMIT_SIGN_UP, saveRegistration } from 'src/actions/inscription';
import { signUpKey } from 'src/config';

import axios from 'axios';

const signUpMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SIGN_UP:
      // Je récupère les valeurs des champs
      // Depuis le state du store
      const state = store.getState();
	  console.log("state", state)
      const {
		  email, password,
      } = state.inscription.user;
	  const returnSecureToken = true;
      console.log("middleware signup email and password", email, password);

      axios.post(`${signUpKey}`, {
        email, password, returnSecureToken
      }, { withCredentials: false })
        .then((response) => {
          console.log('test de response: ', response.data);
          store.dispatch(saveRegistration(response.data));
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

export default signUpMiddleware;