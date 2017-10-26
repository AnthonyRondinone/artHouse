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


  handleBidChange(e) {
    this.setState({bid: e.target.value});
  }

  handlePlaceBid(e) {
    e.preventDefault();
    const newBid = Object.assign({}, this.state);
    this.props.addBid({bid: newBid}).then(this.props.clearBidErrors);
    this.setState({bid: ""});
  }

  render() {

    let errors = this.props.errors.responseJSON ? this.props.errors.responseJSON.join(", ") : "";

    let post = this.props.post[this.props.match.params.postId];

    if (post) {
      let zero = 0;
      let bidAmount = post.topBid ? parseFloat(post.topBid.bid).toFixed(2) : zero.toFixed(2);
      let minBid = post.topBid ? (parseFloat(post.topBid.bid) + 0.99).toFixed(2) : (zero + 0.99).toFixed(2);

      return (
        <div>
          <div className="b-post">

            <div className="s-image-left-contain">
              <div className="s-post-image">
                <img className="s-image" src={post.imageOrig}/>
              </div>
            </div>


            <div className="b-artist-info" >
              <div className="b-name-contain">
                <div className="s-avatar-contain">
                  <Link to={`/users/${post.artistId}`}>
                    <img className="s-artist-avatar" src={post.avatarThumb} />
                  </Link>
                </div>
                <Link className='s-artist-name' to={`/users/${post.artistId}`}>{post.username}</Link>

              </div>


              <div className="bid-info">
                <div className="current-bid-contain">
                  <span className="current-bid-text">Current bid: </span>
                  <span className="current-bid">US ${bidAmount}</span>
                </div>
                <div>
                  <input className='bid-input'
                    type="text"
                    onChange={this.handleBidChange}
                    value={this.state.bid}
                    placeholder="Enter bid"/>
                  <button className="submit-bid-button" onClick={this.handlePlaceBid}>Place bid</button>
                </div>
                <div className="under-input">
                  <span className="current-bid-text">Enter US $ {minBid} or more</span>
                  <div className="bid-error">{ errors }</div>
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
