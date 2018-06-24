import { userSearch } from '../services/starwars';


const loginCheck = (people, term, pswd) => {
    const user = people.filter(item => {
      return (item.name === term && item.birth_year === pswd) ;
    });
    return user.length ? {loggedIn: true, user} : {loggedIn: false, user};
}

export const searchPeople = (term,pswd) => {
  return (dispatch) => {
    if (!term) {
      return dispatch({ type: "LOGIN_DETAILS", payload: {} })
    }

    dispatch({ type: "SEARCH_LOADING" });
    userSearch(term,pswd)
      .then(res => dispatch({ type: "LOGIN_DETAILS", payload: loginCheck(res.results,term,pswd) }))
      .catch(err => dispatch({ type: "LOGIN_DETAILS_ERROR", payload: err }));
  }
}

export const setUserDetails = (details) => {
  return (dispatch) => {
    dispatch({ type: "SET_USER_DETAILS" , payload:details});
  }
}

export const clearLogin = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "SEARCH_CLEAR" });
  }
}
