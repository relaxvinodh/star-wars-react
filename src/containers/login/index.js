import React from 'react';
import { connect } from 'react-redux';
import { searchPeople, setUserDetails } from '../../actions/loginAction';
import './styles.css';

class LoginPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password:''
    };
  }

  componentWillMount(){
    const userDetails = localStorage.getItem('userDetails');
    const {setUserDetails} = this.props;
    if(userDetails && JSON.parse(userDetails).loggedIn){
      this.props.history.push('/search');
      setUserDetails(JSON.parse(userDetails));
    }

  }

  componentWillUpdate (nextProps) {
    if(nextProps.authenticate.loggedIn){
      this.props.history.push('/search');
      localStorage.setItem('userDetails',JSON.stringify(nextProps.authenticate));
    }
  }


  handleChange = (e) =>{
    e.target.classList.add('active');
    this.setState({
      [e.target.name]: e.target.value
    });
    this.showInputError(e.target);
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    if (!this.showFormErrors()) {
      console.log('Form is invalid');
    } else {
      this.validateLogin();
    }
  }

  validateLogin(){
    const {userName, password} = this.state;
    const {
      searchPeople
    } = this.props;
    searchPeople(userName,password);
  }

  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add('active');

      const isInputValid = this.showInputError(input);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(input) {
    const name = input.name;
    const validity = input.validity;
    const label = document.getElementById(`${name}`).placeholder;
    const error = document.getElementById(`${name}Error`);

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      }
      return false;
    }

    error.textContent = '';
    return true;
  }

  render(){
    const { loggedIn } = this.props.authenticate;
      return(
        <div className="container">
          <div className="wrapper">
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
              <div className="form-signin">
                <h3 className="form-signin-heading">
                  Please Sign In!
                </h3>
                  {loggedIn === false ? <p>Please check your User Name and Password</p> : null}
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  placeholder="User Name"
                  required onChange={this.handleChange}
                  value={this.state.userName}
                  autoFocus  />
                <div className="error" id="userNameError" />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password" onChange={this.handleChange}
                  value={this.state.password}
                  required />
                <div className="error" id="passwordError" />
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>

      );

  }
}

const mapStateToProps = ({ authenticate }) => {
  return {
    authenticate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchPeople: (term,pswd) => dispatch(searchPeople(term,pswd)),
    setUserDetails: details => dispatch(setUserDetails(details))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
