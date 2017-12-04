import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import DeletePostDropdownItem from './delete_post_dropdown';
import { Link, withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: (postId) => dispatch(deletePost(postId))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(DeletePostDropdownItem));
