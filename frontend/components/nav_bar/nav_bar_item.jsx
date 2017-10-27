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
          <div className="nav-mid">

            <div className="logo-container">
              <Link className="logo-link" to="/"><img src={window.images.navLogo} /></Link>
            </div>

            <div className="search-container">
              <input className="search" type="text" placeholder="Search" />
            </div>

            <div className="nav-right">
              <div className="icon-container" >

                <Link to={`/users/${this.props.currentUser.id}`}><i className="fa fa-user nav-icon" aria-hidden="true"></i></Link>
                <Link to={`/bids/${this.props.currentUser.id}`}><i className="fa fa-gavel nav-icon" aria-hidden="true"></i></Link>
                <Link className="right-nav-icon"
                  to={`/create`}>
                  <i className="fa fa-camera nav-icon" aria-hidden="true"></i>
                </Link>
                  <i className="fa fa-sign-out nav-icon" aria-hidden="true" onClick={this.handleClick} ></i>
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
