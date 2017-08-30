import { connect } from 'react-redux';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { addNewLike, unLike } from '../../actions/like_actions';
import { importPostDetail } from '../../actions/post_actions';
import ImageDetailItem from './image_detail_item';

const mapStateToProps = ( state, ownProps ) => {
  return {
    posts: state.entities.posts,
    comments: state.entities.comments,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    importPostDetail: (postId) => dispatch(importPostDetail(postId)),
    addNewLike: (like) => dispatch(addNewLike(like)),
    unLike: (postId) => dispatch(unLike(postId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImageDetailItem));
