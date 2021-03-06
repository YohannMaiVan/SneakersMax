import { CHANGE_MAIL_FIELD_VALUE, CHANGE_PASSWORD_FIELD_VALUE, SAVE_REGISTRATION } from '../actions/inscription';

const initialState = {
  user: {
	  email: '',
	  password: '',
  },
  keyId: ''
};

const inscription = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MAIL_FIELD_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email
        }
      };
      case CHANGE_PASSWORD_FIELD_VALUE:
        return {
          ...state,
          user: {
            ...state.user,
            password: action.password
          }
        };
        case SAVE_REGISTRATION:
          return {
            ...state,
            keyId: action.payload.idToken
          };
    default:
      return state;
  }
};

export default inscription;
