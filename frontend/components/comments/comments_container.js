import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import {selectPostComments} from '../../reducers/selectors';


const mapStateToProps = ( state, ownProps ) => {
  return {
    comments: selectPostComments(state, ownProps)
  };
};




export default connect(mapStateToProps, null)(CommentIndex);
