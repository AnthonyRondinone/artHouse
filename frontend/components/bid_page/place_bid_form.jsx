import React from 'react';
import { Link } from 'react-router-dom';


class PlaceBidForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bid: "", post_id: this.props.match.params.postId};
    this.handleBidChange = this.handleBidChange.bind(this);
    this.handlePlaceBid = this.handlePlaceBid.bind(this);
  }


  componentDidMount() {
    this.props.importPostDetail(this.props.match.params.postId);
  }

  componentWillUnmount() {
    this.props.clearBidErrors();
    this.props.clearBidMessage();
  }


  handleBidChange(e) {
    this.setState({bid: e.target.value});
  }


  handlePlaceBid(e) {
    e.preventDefault();
    this.props.clearBidMessage();
    const newBid = Object.assign({}, this.state);
    this.props.addBid({bid: newBid}).then(this.props.clearBidErrors)
      .then(this.props.receiveBidMessage);
    this.setState({bid: ""});
  }

  render() {

    let errors = this.props.errors.responseJSON ? this.props.errors.responseJSON.join(", ") : "";
    let message = this.props.messages ? this.props.messages : "";

    let post = this.props.post[this.props.match.params.postId];

    if (post) {
      let zero = 0;
      let currBid = post.topBid ? parseFloat(post.topBid.bid).toFixed(2) : zero.toFixed(2);
      let minBid = post.topBid ? (parseFloat(post.topBid.bid) + 1.00).toFixed(2) : (zero + 1.00).toFixed(2);

      let CurrUserHighBid = "";

      if (post.topBid !== null){
        CurrUserHighBid = post.topBid.user_id == this.props.currentUser.id ? "You have the current high bid!" : "";
      }

      return (
        <div className="bid-main">
          <h2 className="auction">Auction</h2>
          <div className="b-post">

            <Link className="ub-post-contain"
              to={`/users/${post.artistId}/${post.id}`}>
              <div className="post-hover" >
                <div className="up-post-cover"></div>
              </div>
              <img className="upPostImg" src={post.imageOrig} />
            </Link>


            <div className="b-artist-info" >
              <div className="b-name-contain">
                <div className="s-avatar-contain">
                  <Link to={`/users/${post.artistId}`}>
                    <img className="s-artist-avatar" src={post.avatarThumb} />
                  </Link>
                </div>
                <Link className='s-artist-name' to={`/users/${post.artistId}`}>{post.username}</Link>

              </div>

              <div className="curr-user-high-bid">
                <span className="curr-user-high-bid"> { CurrUserHighBid } </span>
              </div>


              <div className="bid-info">
                <div className="current-bid-contain">
                  <span className="current-bid-text">Current bid: </span>
                  <span className="current-bid">US ${currBid}</span>
                </div>
                <div>
                  <input className='bid-input'
                    type="text"
                    onChange={this.handleBidChange}
                    value={this.state.bid}
                    placeholder="Enter bid"/>
                  <button className="submit-bid-button"
                    onClick={this.handlePlaceBid}>Place bid</button>
                </div>
                <div className="under-input">
                  <span className="current-bid-text">Enter US $ {minBid} or more</span>
                  <div className="bid-error">{ errors }</div>
                  <div className="bid-message">{ message }</div>
                </div>
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

export default PlaceBidForm;
