import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
    this.demoLogIn = this.demoLogIn.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.match.path !== newProps.match.path) {
      this.props.clearErrors();
    }
  }

  demoLogIn() {
    dispatch(login(this.state)).then(() => this.props.history.push('/'));
  }

  handleDemoClick(e) {
    e.preventDefault();
    this.setState({ username: "anthony_rondinone", password: "password"});
    setTimeout(this.demoLogIn, 500);
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
    this.setState({ username: "", password: ""});
  }

  render () {
    let sendLink = this.props.formType === '/signin' ? '/signup' : '/signin';
    let showLink = this.props.formType === '/signin' ? 'Sign up' : 'Log in';
    let question = this.props.formType === '/signup' ? 'Have an account?' : "Don't have an account?";
    let agreement = this.props.formType === '/signup' ? 'By signing up, you agree to our Terms & Private Policy.' : "";
    let SignUpPitch = this.props.formType === '/signup' ? 'Sign up to find new artists' : '';
    let buttonName = this.props.formType === '/signin' ? 'Log in' : 'Sign up';
    let errors = "";
    if (this.props.errors.responseJSON) {
      errors = this.props.errors.responseJSON.join(", ");
    } else {
      errors = '';
    }
    return (
      <div className="sign-up-page" >
        <div className ="welcome" >
          <div>
            <img className="phones" src={ window.images.signIn} />
          </div>
          <section className="form">
            <form className="inputSection" onSubmit={this.handleSubmit}>
              <img src={window.images.signInLogo} />
              <h4 className="pitch">{SignUpPitch}</h4>
              <input className="authInput" type="text" onChange={this.handleUsernameChange} value={this.state.username} placeholder="Username"/>
              <br></br>
              <input className="authInput" type="password" onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password" />
              <br></br>
              <button className="authButton" >{ buttonName }</button>
              <p className="errors" >{ errors }</p>
              <button onClick={this.handleDemoClick} className="authButton" >Demo Log in</button>
              <p className="agreement" >{ agreement }</p>
            </form>
            <div className="questionSec" >
              <section className="question">
                <p className="pText" >{question}</p>
                <Link className="logSignLink" to={sendLink}><span >{showLink}</span></Link>
              </section>
            </div>
          </section>
        </div>

        <div className="icon-div">
          <a href="https://github.com/AnthonyRondinone/artHouse"><i className="foot-icons fa fa-github" aria-hidden="true"></i></a>
          <a href="mailto:a.rondinone@gmail.com"><i className="foot-icons fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/anthony-rondinone-a1111446"><i className="foot-icons fa fa-linkedin" aria-hidden="true"></i></a>
        </div>

      </div>
    );
  }

}

export default (SessionForm);
