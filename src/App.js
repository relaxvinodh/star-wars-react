import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StarWarsApp from './containers/StarWarsApp';
import LoginPage from './containers/login/';
import { Provider } from 'react-redux';
import store from './stores';
import './index.css';


class App extends Component {
   render() {
      return (
         <Router>
            <Provider store={store}>
            <div>
               <Switch>
                  <Route exact path='/' component={LoginPage} />
                  <Route exact path='/search' component={StarWarsApp} />
               </Switch>
            </div>
            </Provider>
         </Router>
      );
   }
}
export default App;
