import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBarItem from './nav_bar_item';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarItem);
