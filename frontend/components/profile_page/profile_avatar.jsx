import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';


class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarFile: null
    };
    this.handleDrop = this.handleDrop.bind(this);
  }


  handleDrop(e) {
    let formData = new FormData();
    formData.append("user[avatar]", e[0]);
    this.props.updateUserAvatar(formData, this.props.currentUser.id);

  }


  render() {
    const { user, currentUser } = this.props;

    if (currentUser) {
      if (this.props.match.params.userId === String(currentUser.id)) {
        return (
          <div>
            <Dropzone className="upAvatar-dropZone"
              onDrop={this.handleDrop} >
              <img className="upAvatar" src={user.avatarOrig} />
            </Dropzone>
          </div>
        );
      } else {
        return (
          <img className="upAvatar" src={user.avatarOrig} />
        );
      }
    }
  }

}

export default withRouter(ProfileAvatar);
