import React from 'react';
import { Link } from 'react-router-dom';

class UserPostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <div className="upPostContain">
        <img src={this.props.image} />
      </div>
    );
  }



}


export default UserPostIndexItem;
