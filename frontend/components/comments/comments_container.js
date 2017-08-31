import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {selectPostComments} from '../../reducers/selectors';
import { deleteComment } from '../../actions/comment_actions';


const mapStateToProps = ( state, ownProps ) => {

  return {
    comments: selectPostComments(state, ownProps),

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
