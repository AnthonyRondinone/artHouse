import { connect } from 'react-redux';
import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Feed from './feed';
import { selectFeedPosts } from '../../reducers/selectors';
import { importFeedPosts } from '../../actions/post_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    posts: selectFeedPosts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    importFeedPosts: () => dispatch(importFeedPosts())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
