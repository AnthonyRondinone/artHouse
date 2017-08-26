import React from 'react';
import { Route, Link } from 'react-router-dom';


class NavBarItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }


  render() {

    if (this.props.currentUser) {
      return (
        <div className="nav-main" >

          <div className="logo-container">
            <Link to="/"><img src={window.images.navLogo} /></Link>
          </div>

          <div className="search-container">
            <input type="text" placeholder="Search" />
          </div>

          <div className="nav-right">
          <Link to={`/users/${this.props.currentUser.id}`}><img src={window.images.profileIcon} alt="profile-icon" /></Link>
            <Link className="right-nav-icon"
              to={`/create`}>
              <img src={window.images.addPhoto} alt="profile-icon" />
            </Link>
            <button className="logout-icon" >
              <img src={window.images.logout} alt="logout-icon" onClick={this.handleClick} />
            </button>
          </div>

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
