import {  CONNEXION_CHANGE_MAIL_FIELD_VALUE, CONNEXION_CHANGE_PASSWORD_FIELD_VALUE , DISCONNECT, SAVE_USER_DATA } from '../actions/connexion';

const initialState = {
  user: {
	  email: '',
	  password: '',
  }
};

const connexion = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNEXION_CHANGE_MAIL_FIELD_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email
        }
      };
      case CONNEXION_CHANGE_PASSWORD_FIELD_VALUE:
        return {
          ...state,
          user: {
            ...state.user,
            password: action.password
          }
        };
        case SAVE_USER_DATA:
          return {
            ...state,
            keyId: action.payload.idToken
          };
        case DISCONNECT: 
        return {
          ...state,
          keyId: ''
        }
    default:
      return state;
  }
};

export default connexion;
