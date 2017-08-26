import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewPost } from '../../actions/post_actions';
import NewPostForm from './new_post_form';



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewPost: (post) => dispatch(createNewPost(post))
  };
};


export default withRouter(connect(null, mapDispatchToProps)(NewPostForm));
