import React from 'react';
import axios from 'axios';

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
      <div>
        <input className="firstName" type="text" placeholder="first name" 
          onChange={this.updateStateParameter}></input>
        <input className="lastName" type="text" placeholder="last name" 
          onChange={this.updateStateParameter}></input>
        <input className="email" type="text" placeholder="email" 
          onChange={this.updateStateParameter}></input>
        <input className="password" type="text" placeholder="password" 
          onChange={this.updateStateParameter}></input>
        <button onClick={this.registerUser} >Register!</button>
        <div>
          {this.state.response}
        </div>
      </div>
    )
  }
}

export default RegistrationForm;