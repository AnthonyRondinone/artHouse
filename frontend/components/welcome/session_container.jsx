import { connect } from 'react-redux';
import SessionForm from './session_form';
import {login, signup, clearErrors} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  if (ownProps.location.pathname === '/signin') {
    return ({
      processForm: (user) => dispatch(login(user)),
      clearErrors: () => dispatch(clearErrors())
    });
  } else if (ownProps.location.pathname === '/signup') {
    return ({
      processForm: (user) => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors())
    });
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
