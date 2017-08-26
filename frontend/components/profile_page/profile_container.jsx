import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileItem from './profile_item';
import { requestSingleUser } from '../../actions/user_actions';
import { selectUsersPosts } from '../../reducers/selectors';

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
    requestSingleUser: (user) => dispatch(requestSingleUser(user))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileItem));
