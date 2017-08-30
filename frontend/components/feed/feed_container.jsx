import { connect } from 'react-redux';
import React from 'react';
import Feed from './feed';
import { selectFeedPosts } from '../../reducers/selectors';
import { importFeedPosts } from '../../actions/post_actions';
import { addNewLike, unLike } from '../../actions/like_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    posts: selectFeedPosts(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    importFeedPosts: () => dispatch(importFeedPosts()),
    addNewLike: (like) => dispatch(addNewLike(like)),
    unLike: (postId) => dispatch(unLike(postId))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
