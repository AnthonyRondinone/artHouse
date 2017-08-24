import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ProfileItem extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  render() {

    return (
      <div>Hi</div>
    );
  }

}

export default ProfileItem;
