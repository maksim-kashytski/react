import { LOGIN, LOGOUT } from './types';

export const authSuccess = ({ username, accessType }) => ({
  type: LOGIN,
  username,
  accessType,
});

export const logout = () => {
  localStorage.clear();
  return {
    type: LOGOUT,
  };
};

export const autoLogin = () => (dispatch) => {
  const user = localStorage.getItem('user');
  if (!user) {
    dispatch(logout());
  } else {
    dispatch(authSuccess(JSON.parse(user)));
  }
};

export const login = (username, accessType) => (dispatch) => {
  const authData = {
    username,
    accessType,
  };
  localStorage.setItem('user', JSON.stringify(authData));
  dispatch(authSuccess(authData));
};
