import { search } from '../services/starwars';

const planets = (planets) => {
  return !planets.length ? {helpText: "No Data", planets} : {helpText: "", planets}
}
export const searchPlanets = (term) => {
  return (dispatch) => {
    if (!term) {
      return dispatch({ type: "SEARCH_SUCCESS", payload: {} })
    }

    dispatch({ type: "SEARCH_LOADING" });

    search(term)
      .then(res => dispatch({ type: "SEARCH_SUCCESS", payload: planets(res.results) }))
      .catch(err => dispatch({ type: "SEARCH_ERROR", payload: err }));
  }
}
