import React from 'react';
import axios from 'axios';

class LogoutForm extends React.Component {
  state = {}

  logout = async () => {
    let response = await this.fetchLogoutResponse()
    this.setState({
      response: response.data.message
    });
  }

  fetchLogoutResponse = async () => {
    const userDataServiceUrl = process.env.REACT_APP_USER_DATA_API_URL + 'logout';
    try {
      let result = axios.get(userDataServiceUrl);
      return result;
    } catch {
      console.log('There was an error while logging out.');
      return false;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.logout} >Log Out</button>
        <div>Response: {this.state.response}</div>
      </div>
    );
  }
}

export default LogoutForm;
