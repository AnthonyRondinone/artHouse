import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// test
import { requestSingleUser } from './actions/user_actions';
import { login, logout, signup } from './actions/session_actions';
import { fetchSingleUser } from './util/user_api_util';
import { requestSignUp, requestLogin, requestLogout } from './util/session_api_util';
import {selectUsersPosts} from './reducers/selectors'
// test

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test
  window.requestSingleUser = requestSingleUser;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.requestSignUp = requestSignUp;
  window.requestLogin = requestLogin;
  window.requestLogout = requestLogout;
  window.fetchSingleUser = fetchSingleUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectUsersPosts = selectUsersPosts;
  // test

  ReactDOM.render(<Root store={store}/>, root);
});
