import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// test
import { login, logout, signup } from './actions/session_actions';
import { requestSignUp, requestLogin, requestLogout } from './util/session_api_util';
// test

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.requestSignUp = requestSignUp;
  window.requestLogin = requestLogin;
  window.requestLogout = requestLogout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // test

  ReactDOM.render(<Root store={store}/>, root);
});
