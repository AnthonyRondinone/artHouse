import React from 'react';
import { withRouter } from 'react-router-dom';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentUser.name,
      username: this.props.currentUser.username,
      bio: this.props.currentUser.bio,
      email: this.props.currentUser.email
    };
  }


  render() {
    return (
      <div>Edit</div>
    );
  }




}


export default (EditForm);
