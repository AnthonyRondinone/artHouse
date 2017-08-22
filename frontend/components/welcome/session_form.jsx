import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
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
    let question = this.props.formType === '/signup' ? 'Have an account? ' : "Don't have an account? ";
    let SignUpPitch = this.props.formType === '/signup' ? 'Sign up to find new artists' : '';
    let buttonName = this.props.formType === '/signin' ? 'Log in' : 'Sign up';
    let errors;
    if (this.props.errors.responseJSON) {
      errors = this.props.errors.responseJSON.join(", ");
    } else {
      errors = '';
    }
    return (
      <div>
        <h1>artHouse</h1>
        <form onSubmit={this.handleSubmit}>
          <h4>{SignUpPitch}</h4>
          <input type="text" onChange={this.handleUsernameChange} value={this.state.username} placeholder="Username"/>
          <br></br>
          <input type="text" onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password" />
          <br></br>
          <button>{ buttonName }</button>
          <p>{ errors }</p>
          <button>Demo Log in</button>
        </form>
        <section>
          <p>{question}</p>
        </section>
      </div>
    );
  }

}

export default (SessionForm);
