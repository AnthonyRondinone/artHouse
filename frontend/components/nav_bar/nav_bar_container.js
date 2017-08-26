import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBarItem from './nav_bar_item';
import { requestSingleUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestSingleUser: (user) => dispatch(requestSingleUser(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarItem));
