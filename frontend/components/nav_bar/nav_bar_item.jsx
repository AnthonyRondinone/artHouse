import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';


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
          <div className="nav-mid">

            <div className="logo-container">
              <Link
                className="logo-link"
                to="/"><img
                src={window.images.navLogo} />
              </Link>
            </div>

            <div className="search-container">
              <input
                className="search"
                type="text"
                placeholder="Search" />
            </div>

            <div className="nav-right">
              <div className="icon-container" >

                <NavLink
                  className='icon-nav'
                  to={`/users/${this.props.currentUser.id}`}
                  activeStyle={{ color: 'black' }} >
                  <i className="fa fa-user nav-icon" aria-hidden="true"></i>
                </NavLink>
                <NavLink
                  className='icon-nav'
                  to={`/bids/${this.props.currentUser.id}`}
                  activeStyle={{ color: 'black' }}>
                  <i className="fa fa-gavel nav-icon" aria-hidden="true"></i>
                </NavLink>
                <NavLink
                  className="right-nav-icon icon-nav"
                  activeStyle={{ color: 'black' }}
                  to={`/create`}>
                  <i className="fa fa-camera nav-icon" aria-hidden="true"></i>
                </NavLink>

                  <i
                    className="fa fa-sign-out icon-nav"
                    aria-hidden="true"
                    onClick={this.handleClick} >
                  </i>
              </div>
            </div>

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
