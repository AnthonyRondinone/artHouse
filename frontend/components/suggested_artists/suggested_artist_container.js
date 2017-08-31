import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSingleUser } from '../../actions/user_actions';
import { selectUsersPosts } from '../../reducers/selectors';
import { addNewFollow, unFollow } from '../../actions/follow_actions';

const mapStateToProps = ( state, ownProps ) => {
  if (state.entities.users[ownProps.match.params.userId]) {
    return {
      user: state.entities.users[ownProps.match.params.userId],
      posts: selectUsersPosts(state),
      currentUser: state.session.currentUser
    };
  } else {
    return {};
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    requestSingleUser: (user) => dispatch(requestSingleUser(user)),
    addNewFollow: (follow) => dispatch(addNewFollow(follow)),
    unFollow: (followId) => dispatch(unFollow(followId))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileItem));
