import React from 'react';
import { Link } from 'react-router-dom';


class HeartButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnLike = this.handleUnLike.bind(this);
  }




  handleLike(e) {
    e.preventDefault();
    this.props.addNewLike({like: {post_id: this.props.postId}});
  }

  handleUnLike(e) {
    e.preventDefault();
    this.props.unLike(this.props.postId);
  }

  render () {

    let liked;
    if (this.props.likerIds === undefined) {
      liked = false;
    } else {
      liked = this.props.likerIds.includes(this.props.currentUserId);
    }

    if(liked === true) {
        return (
          <button className="heart-button" onClick={this.handleUnLike}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
        );
    } else {
      return (
        <button className="heart-button" onClick={this.handleLike}>
          <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
        </button>
      );
    }
  }

}

export default HeartButton;
