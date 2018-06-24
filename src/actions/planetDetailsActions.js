import { getDetails } from '../services/starwars';

export const getPlanetDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: "GET_DETAILS_LOADING" });

    getDetails(id)
      .then(res => dispatch({ type: "GET_DETAILS_SUCCESS", payload: res }))
      .catch(err => dispatch({ type: "GET_DETAILS_ERROR", payload: err }));
  }
}

export const clearPlanetDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_DETAILS" });
    dispatch({ type: "SEARCH_CLEAR" });
  }
}
