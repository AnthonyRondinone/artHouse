import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileItem from './profile_item';
import { requestSingleUser } from '../../actions/user_actions';
import { selectUsersPosts } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps ) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    posts: state.entities.posts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    requestSingleUser: (user) => dispatch(requestSingleUser(user))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileItem));
