import { SET_CURRENT_USER, TOGGLE_IS_LOGGED_IN} from './user-actions';

const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case TOGGLE_IS_LOGGED_IN:
        return {
            ...state,
            isLoggedIn: !state.isLoggedIn,
        }
    default:
      return state;
  }
};

export default userReducer;
