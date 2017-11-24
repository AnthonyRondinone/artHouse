import { connect } from 'react-redux';
import { createNewPost } from '../../actions/post_actions';
import NewPostForm from './new_post_form';



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewPost: (post) => dispatch(createNewPost(post))
  };
};


export default connect(null, mapDispatchToProps)(NewPostForm);
