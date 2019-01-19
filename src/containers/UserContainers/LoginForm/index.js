import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCurrentUser } from '../../../actions';
import { routeToUserProfile } from '../../../routes/routes';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }
  
  updateStateParameter = (e) => {
    const param = e.target.className;
    this.setState({
      [param]: e.target.value
    });
  }

  loginUser = async () => {
    if (!this.state.email || !this.state.password) {
      this.setState({
        response: 'Please fill in your email and password.'
      });
    } else {
      let loginResponse = await this.fetchLoginResponse();
      if (loginResponse) {

        const currentUser = {
          name: loginResponse.data.user.name,
          email: loginResponse.data.user.email,
          token: loginResponse.data.token,
        }

        this.props.addCurrentUser({ user: currentUser });
        routeToUserProfile();
      } else {
        this.setState({
          response: 'User could not be authorised.',
        });
      }
    }
  }

  fetchLoginResponse = async () => {
    const userDataServiceUrl = process.env.REACT_APP_USER_DATA_API_URL + 'login';
    try {
      let result = await axios.post(userDataServiceUrl, {
        email: this.state.email,
        password: this.state.password
      });
      return result;
    } catch {
      return false;
    }
  };

  render() {
    return (
      <div className='formContainer'>
        <input className="email" type="text" placeholder="Email" 
          onChange={this.updateStateParameter}></input>
        <input className="password" type="text" placeholder="Password" 
          onChange={this.updateStateParameter}></input>
        <button onClick={this.loginUser} >Log In</button>
        <div>Response: {this.state.response}</div>
        <Link to='/user/registration' >Don't have an account?</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  addCurrentUser,
}

const ConnectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default ConnectedLoginForm;
