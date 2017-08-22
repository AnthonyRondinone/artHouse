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

    let buttonName = this.props.formType === '/signin' ? 'Log in' : 'Sign up';
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleUsernameChange} value={this.state.username} placeholder="Username"/>
        <br></br>
        <input type="text" onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password" />
        <br></br>
        <button>{ buttonName }</button>

      </form>
    );
  }

}

export default (SessionForm);
