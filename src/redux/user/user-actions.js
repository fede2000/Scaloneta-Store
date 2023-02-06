export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const TOGGLE_IS_LOGGED_IN = 'TOGGLE_IS_LOGGED_IN';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const toggleIsLoggedIn = () => ({
    type: TOGGLE_IS_LOGGED_IN,
})
