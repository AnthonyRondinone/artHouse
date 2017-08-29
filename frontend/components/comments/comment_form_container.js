import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addComment} from '../../actions/comment_actions';
import CommentForm from './comment_form';


const mapStateToProps = ( state, ownProps ) => {
  return {
    postId: ownProps.postId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
