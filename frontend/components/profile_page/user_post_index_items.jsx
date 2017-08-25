import React from 'react';
import { Link } from 'react-router-dom';

class UserPostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="upPostContain">
        <img className="upPostImg" src={this.props.image} />
      </div>
    );
  }



}


export default UserPostIndexItem;
