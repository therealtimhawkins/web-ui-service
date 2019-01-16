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

  setLoginResponse = (response) => {
    this.setState({
      response: response.data.message,
    })
  }

  loginUser = async () => {
    let loginResponse = await this.fetchLoginResponse();
    this.setLoginResponse(loginResponse);
  }

  fetchLoginResponse = async () => {
    const userDataServiceUrl = process.env.REACT_APP_USER_DATA_API_URL + 'login';
    try {
      let result = await axios.post(userDataServiceUrl, {
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
      <div className='formContainer'>
        <input className="email" type="text" placeholder="Email" 
          onChange={this.updateStateParameter}></input>
        <input className="password" type="text" placeholder="Password" 
          onChange={this.updateStateParameter}></input>
        <button onClick={this.loginUser} >Log In</button>
        <div>Response: {this.state.response}</div>
      </div>
    )
  }
}

export default LoginForm;
