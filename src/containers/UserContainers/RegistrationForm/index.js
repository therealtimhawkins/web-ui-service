import React from 'react';

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
    console.log(this.state);
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
      </div>
    )
  }
}

export default RegistrationForm;