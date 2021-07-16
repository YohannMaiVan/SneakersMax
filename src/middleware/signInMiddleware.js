/* eslint-disable no-case-declarations */
import { SUBMIT_SIGN_IN, saveUserData } from 'src/actions/connexion';
import { signInKey } from 'src/config';

import axios from 'axios';

const signInMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SIGN_IN:
      // Je récupère les valeurs des champs
      // Depuis le state du store
      const state = store.getState();
	  console.log("state", state)
      const {
		  email, password,
      } = state.connexion.user;
	  const returnSecureToken = true;
      console.log("middleware signIN email and password", email, password);

      axios.post(`${signInKey}`, {
        email, password, returnSecureToken
      }, { withCredentials: false })
        .then((response) => {
          console.log('test de response: ', response.data);
          store.dispatch(saveUserData(response.data));
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

export default signInMiddleware;