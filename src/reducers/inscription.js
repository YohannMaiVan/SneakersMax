import { CHANGE_SIGNUP_FIELD_VALUE } from '../actions/inscription';

const initialState = {
  user: {
	  mail: '',
	  password: ''
  }
};

const inscription = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNUP_FIELD_VALUE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default inscription;
