import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Feed from './feed';
import { selectFeedPosts } from '../../reducers/selectors';
import { importFeedPosts, deletePost, openDelete, closeDelete } from '../../actions/post_actions';
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
    unLike: (postId) => dispatch(unLike(postId)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    openDelete: (postId) => dispatch(openDelete(postId)),
    closeDelete: (postId) => dispatch(closeDelete(postId))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed));
