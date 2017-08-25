import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // debugger
    e.preventDefault();
    this.props.logout();

  }

  render() {

    if(this.props.currentUser !== null) {
      return (
        <div>
          <button onClick={this.handleClick}>Log out</button>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

export default Feed;
