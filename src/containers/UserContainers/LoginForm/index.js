import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {
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

  loginUser = () => {
    const userDataServiceUrl = process.env.REACT_APP_USER_DATA_API_URL + 'login';

    axios.post(userDataServiceUrl, {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      this.setState({
        response
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className='formContainer'>
        <input className="email" type="text" placeholder="Email" 
          onChange={this.updateStateParameter}></input>
        <input className="password" type="text" placeholder="Password" 
          onChange={this.updateStateParameter}></input>
        <button onClick={this.loginUser} >Log In</button>
      </div>
    )
  }
}

export default LoginForm;
