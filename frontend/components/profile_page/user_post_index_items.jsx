import React from 'react';
import { Link } from 'react-router-dom';

class UserPostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link className="upPostContain" to={`/post/${this.props.postId}`}>
          <img className="upPostImg" src={this.props.image} />
      </Link>
    );
  }

}



export default UserPostIndexItem;
