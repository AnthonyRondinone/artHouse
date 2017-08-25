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
      <div className="nav-main" >

          <button className="profile-icon" ><img src={window.images.logout} alt="logoutIcon" onClick={this.handleClick} /></button>

      </div>
    );
  }

}

export default NavBarItem;
