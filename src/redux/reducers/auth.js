import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  username: '',
  accessType: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.username,
        accessType: action.accessType,
      };
    case LOGOUT:
      return {
        ...state,
        username: '',
        accessType: '',
      }
    default:
      return state;
  }
};

export default authReducer;
