import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SuggestedIndexItem from './suggested_index_item';

class SuggestedUserItem extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.suggestedUser();
  }


  render() {
    const { users, currentUser, addNewFollow, unFollow } = this.props;

    const suggestedUserIndexItems = users.map((user) => <SuggestedIndexItem
    key={user.id}
    user={user}
    currentUser={currentUser}
    addNewFollow={addNewFollow}
    unFollow={unFollow}

    />);

    return (

      <div className="su-main" >

        <div className="discover" >Discover new artists</div>

        <div className="su-contain-main" >
          { suggestedUserIndexItems }
        </div>

      </div>
    );
  }



}

export default SuggestedUserItem;
