import React from 'react';
import { connect } from 'react-redux';
import { addPostcode } from '../../actions';
import './LoginButton.css';

class LoginButton extends React.Component {
  render() {
    return (
      <div>
        <button className="loginButton" onClick={() => this.props.addPostcode({ postcode: 'Postcode Is Working!'})}>Login</button>
        <h2>{this.props.postcode}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postcode: state.postcode,
});

const mapDispatchToProps = {
  addPostcode,
}

const ConnectedLoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);

export default ConnectedLoginButton;
