import { combineReducers } from 'redux';

const loginReducer = (state = {
  auth: 'Not Authenticated',
  authenticating: 'none',
}, action) => {
  switch (action.type) {
    case 'USER_IS_AUTHENTICATING':
      return {
        ...state,
        authenticating: 'sent',
      };
    case 'USER_AUTHENTICATION_FAILED':
      return {
        ...state,
        authenticating: 'complete',
      };
    case 'USER_IS_AUTHENTICATED':
      return {
        auth: 'Authenticated',
        authenticating: 'complete',
      };
    case 'USER_AUTHENTICATION_COMPLETE':
      return {
        ...state,
        authenticating: 'none',
      };
    default:
      return state;
  }
};

export default loginReducer;
