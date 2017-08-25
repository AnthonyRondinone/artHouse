import React from 'react';
import { Route, Link } from 'react-router-dom';


class NavBarItem extends React.Component {
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


    return (
      <div>
        <button onClick={this.handleClick}>Log out</button>
      </div>
    );
  }

}

export default NavBarItem;
