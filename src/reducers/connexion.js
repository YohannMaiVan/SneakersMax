import { SAVE_USER } from '../actions/inscription';

const initialState = {
  user: {
	  email: '',
	  password: '',
  }
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
    default:
      return state;
  }
};

export default connexion;
