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

    if (this.props.currentUser) {
      return (
        <div className="nav-main" >
          <Link className="profile-icon" to={`/users/${this.props.currentUser.id}`}><img src={window.images.profileIcon} alt="profile-icon" /></Link>
          <button className="profile-icon" ><img src={window.images.addPhoto} alt="add-icon" /></button>
          <button className="profile-icon" ><img src={window.images.logout} alt="logout-icon" onClick={this.handleClick} /></button>

        </div>
      );
    } else {
      return (
      <div></div>
      );
    }


  }

}

export default NavBarItem;
