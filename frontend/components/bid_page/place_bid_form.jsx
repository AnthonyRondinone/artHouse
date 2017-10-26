import React from 'react';
import { Link } from 'react-router-dom';


class PlaceBidForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bid: 0, post_id: this.props.match.params.postId};
    this.handleBidChange = this.handleBidChange.bind(this);
    this.handlePlaceBid = this.handlePlaceBid.bind(this);
  }


  componentDidMount() {
    this.props.importPostDetail(this.props.match.params.postId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.errors.responseJSON) {
      this.props.clearBidErrors();
    }
  }

  handleBidChange(e) {
    this.setState({bid: e.target.value});
  }

  handlePlaceBid(e) {
    e.preventDefault();
    const newBid = Object.assign({}, this.state);
    this.props.addBid({bid: newBid});
  }

  render() {

    let errors = this.props.errors.responseJSON ? this.props.errors.responseJSON.join(", ") : "";

    let post = this.props.post[this.props.match.params.postId];

    if (post) {
      let zero = 0;
      let bidAmount = post.topBid ? parseFloat(post.topBid.bid).toFixed(2) : zero.toFixed(2);

      return (
        <div>
          <div className="s-post">

            <div className="s-image-left-contain">
              <div className="s-post-image">
                <img className="s-image" src={post.imageOrig}/>
              </div>
            </div>


            <div className="s-artist-info" >
              <div>
                <div className="s-avatar-contain">
                  <Link to={`/users/${post.artistId}`}>
                    <img className="s-artist-avatar" src={post.avatarThumb} />
                  </Link>
                </div>
                <Link className='s-artist-name' to={`/users/${post.artistId}`}>{post.username}</Link>

              </div>


                <div className="bid-info">
                  <input className='bid-input'
                    type="text"
                    onChange={this.handleBidChange}
                    placeholder="Enter bid"/>
                  <button onClick={this.handlePlaceBid}>Place bid</button>
                  <div>{post.bidIds.length}</div>
                  <div>{bidAmount}</div>
                  <div>{ errors }</div>
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
