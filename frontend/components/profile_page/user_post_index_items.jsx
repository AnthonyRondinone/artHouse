import React from 'react';
import { Link } from 'react-router-dom';

class UserPostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link className="upPostContain" to={`/users/${this.props.userId}/${this.props.postId}`}>
        <div className="upPostContain">
          <img className="upPostImg" src={this.props.image} />
        </div>
      </Link>
    );
  }

}



export default UserPostIndexItem;
