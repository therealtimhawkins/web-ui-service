import React from 'react';
import { connect } from 'react-redux';
import { routeToHomePage } from '../../../routes/routes';
import { addCurrentUser } from '../../../actions';

class LogoutForm extends React.Component {
  
  logout = () => {
    this.props.addCurrentUser({ user: null });
    routeToHomePage();
  }

  render() {
    return (
      <div>
        <button onClick={this.logout} >Log Out</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  addCurrentUser,
}

const ConnectedLogoutForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutForm);

export default ConnectedLogoutForm;
