const initialState = {
  helpText: '',
  planets: []
};

export const results = (state = initialState, action) => {
  switch (action.type) {

    case 'SEARCH_SUCCESS': {
      return Object.assign({}, action.payload);
    }

    case 'SEARCH_ERROR': {
      return {};
    }

    case 'SEARCH_CLEAR': {
      return Object.assign({}, initialState);
    }

    default:
      return state;
  }
};
