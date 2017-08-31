import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// test
import { sendNewPost, fetchAllFolloweePosts } from './util/post_api_util';
import {createNewPost, receiveNewPost, receiveFeedPosts, importFeedPosts, importPostDetail} from './actions/post_actions';
import { requestSingleUser, suggestedUser } from './actions/user_actions';
import { login, logout, signup } from './actions/session_actions';
import { fetchSingleUser, fetchSuggestedUsers } from './util/user_api_util';
import { requestSignUp, requestLogin, requestLogout } from './util/session_api_util';
import {selectUsersPosts, selectFeedPosts, selectPostComments} from './reducers/selectors';
import { addFollow, removeFollow } from './util/follow_api_util';
import { addNewFollow, unFollow } from './actions/follow_actions';
import {addComment, deleteComment} from './actions/comment_actions';
import {addLike, removeLike} from './util/like_api_util';
import {addNewLike, unLike} from './actions/like_actions';
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
  window.deleteComment = deleteComment;
  window.importPostDetail = importPostDetail;
  window.unLike = unLike;
  window.addNewLike = addNewLike;
  window.removeLike = removeLike;
  window.addLike = addLike;
  window.addComment = addComment;
  window.selectPostComments = selectPostComments;
  window.selectFeedPosts = selectFeedPosts;
  window.importFeedPosts = importFeedPosts;
  window.receiveFeedPosts = receiveFeedPosts;
  window.unFollow = unFollow;
  window.addNewFollow = addNewFollow;
  window.removeFollow = removeFollow;
  window.addFollow = addFollow;
  window.sendNewPost = sendNewPost;
  window.createNewPost = createNewPost;
  window.receiveNewPost = receiveNewPost;
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
