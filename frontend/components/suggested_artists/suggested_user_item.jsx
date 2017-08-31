import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SuggestedUserItem extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.suggestedUser();
  }


  render() {
    return (
      <div>Hi</div>
    );
  }



}

export default SuggestedUserItem;
