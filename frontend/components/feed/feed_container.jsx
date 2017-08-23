import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Feed from './feed';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
