import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
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
    }

  }
}

export default Feed;
