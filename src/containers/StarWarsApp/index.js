import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPlanets } from '../../actions/searchActions';
import { getPlanetDetails, clearPlanetDetails } from '../../actions/planetDetailsActions';
import { setUserDetails, clearLogin } from '../../actions/loginAction';
import Search from '../../components/Search';
import PlanetDetails from '../../components/PlanetDetails';

class StarWarsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:1,
      startTime: null,
      errorMessage:null
    }
    this.placeholder = 'Star Wars Planet Search';
  }

  componentWillMount(){
    const userDetails = localStorage.getItem('userDetails');
    const {setUserDetails, authenticate} = this.props;
    if(!userDetails && !authenticate.loggedIn)
      this.props.history.push('/');
    else
      setUserDetails(JSON.parse(userDetails));
  }
  searchPlanets = ({ target }) => {
    const { searchPlanets, authenticate } = this.props;
    const { value } = target;
    const {count, startTime} = this.state;
    const currentTime = new Date().getTime();

    if(((currentTime - startTime)/1000 > 60)){
      this.setState({
        count: 1,
        startTime: new Date().getTime(),
        errorMessage:null
      });
    }

    if(authenticate.user[0].name === "Luke Skywalker" || count <= 15 )
      searchPlanets(value);
    else if(count > 15 && ((currentTime - startTime)/1000 < 60)){
      const diff = Math.round(60 - ((currentTime - startTime)/1000));
      this.setState({errorMessage:`Only 15 searches allowed, Please try after ${diff} seconds`})
    }

    if(!startTime)
      this.setState({startTime: new Date().getTime()});

    this.setState({count: this.state.count+1});

  };

  clearLogin = () => {
    const {clearLogin} = this.props;
    clearLogin();
    localStorage.removeItem("userDetails");
    this.props.history.push('/');
  }

  render() {
    const {
      results,
      planet,
      getPlanetDetails,
      clearPlanetDetails,
      authenticate
    } = this.props;
    const {errorMessage} = this.state;
    if (!planet) {

      return (
        <Search
          placeholder={this.placeholder}
          searchPlanets={this.searchPlanets}
          onInput={this.searchPlanets}
          results={results}
          onClick={getPlanetDetails}
          authenticate={authenticate}
          logout={this.clearLogin}
          errorMessage={errorMessage}
        />
      );
    }

    return (
      <PlanetDetails
        planet={planet}
        clearPlanetDetails={clearPlanetDetails}
      />
    );
  }
}

const mapStateToProps = ({ results, planet, authenticate }) => {
  return {
    results,
    planet,
    authenticate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPlanets: term => dispatch(searchPlanets(term)),
    getPlanetDetails: url => dispatch(getPlanetDetails(url)),
    clearPlanetDetails: () => dispatch(clearPlanetDetails()),
    setUserDetails: details => dispatch(setUserDetails(details)),
    clearLogin: () => dispatch(clearLogin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsSearch);
