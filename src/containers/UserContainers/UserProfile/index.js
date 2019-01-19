import React from 'react';
import { connect } from 'react-redux';
import LogoutForm from '../LogoutForm';

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <h2>{props.user.email}</h2>
      <LogoutForm />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {};

const ConnectedUserProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default ConnectedUserProfile;
