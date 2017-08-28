import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';


const mapStateToProps = ( state, ownProps ) => {
  return {
    comments: state.entities.comments
  };
};




export default connect(mapStateToProps, null)(CommentIndex);
