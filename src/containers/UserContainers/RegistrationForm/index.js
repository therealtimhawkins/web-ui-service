import React from 'react';
import axios from 'axios';
import './RegistrationForm.css';

class RegistrationForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  
  updateStateParameter = (e) => {
    const param = e.target.className;
    this.setState({
      [param]: e.target.value
    });
  }

  registerUser = () => {
    axios.post('http://localhost:3002/api/users/register/', {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      this.setState({
        response
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="formContainer">
        <div className="formTitle">
        </div>
        <input className="firstName" type="text" placeholder="First Name" 
          onChange={this.updateStateParameter}></input>
        <input className="lastName" type="text" placeholder="Last Name" 
          onChange={this.updateStateParameter}></input>
        <input className="email" type="text" placeholder="Email" 
          onChange={this.updateStateParameter}></input>
        <input className="password" type="text" placeholder="Password" 
          onChange={this.updateStateParameter}></input>
        <button onClick={this.registerUser} >Register</button>
        <div>
          {this.state.response}
        </div>
      </div>
    )
  }
}

export default RegistrationForm;