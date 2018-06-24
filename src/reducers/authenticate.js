const initialState = {};

export const authenticate = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_DETAILS':
    return Object.assign({}, action.payload);
    case 'SET_USER_DETAILS':
      return Object.assign({}, action.payload);
    case 'LOGOUT':
      return {};
    case 'LOGIN_DETAILS_ERROR':
      return {};
    default:
      return state
  }
}
