import React from 'react';
import axios from 'axios';
import { routeToUserProfile } from '../../../routes/routes';
import LoginForm from '../LoginForm';
import LogoutForm from '../LogoutForm';
import './RegistrationForm.css';

class RegistrationForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }
  
  updateStateParameter = (e) => {
    const param = e.target.className;
    this.setState({
      [param]: e.target.value
    });
  }

  registerUser = async () => {
    if (this.state.name || this.state.email || this.state.password) {
      let registerResponse = await this.fetchRegisterResponse();
      if (registerResponse) {
        routeToUserProfile();
      } else {
        this.setState({
          response: 'User could not be authorised.',
        });
      }
    } else {
      this.setState({
        response: 'Please fill in all of the user fields'
      })
    }
  }

  fetchRegisterResponse = async () => {
    const userDataServiceUrl = process.env.REACT_APP_USER_DATA_API_URL + 'register';
    try {
      let result = await axios.post(userDataServiceUrl, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      return result;
    } catch {
      console.log('There was an error retreiving log in authorisation.');
      return false;
    }
  };

  render() {
    return (
      <div className="formContainer">
        <div className="formTitle">
        </div>
        <input className="name" type="text" placeholder="Name" 
          onChange={this.updateStateParameter}></input>
        <input className="email" type="text" placeholder="Email" 
          onChange={this.updateStateParameter}></input>
        <input className="password" type="text" placeholder="Password" 
          onChange={this.updateStateParameter}></input>
        <button onClick={this.registerUser} >Register</button>
        <div>Response: {this.state.response}</div>
        <LoginForm />
        <LogoutForm />
      </div>
    )
  }
}

export default RegistrationForm;