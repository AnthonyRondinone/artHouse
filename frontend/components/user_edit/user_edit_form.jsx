import React from 'react';
import { withRouter } from 'react-router-dom';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        username: "",
        bio: "",
        email: ""
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }


  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId)
    .then( () => {
        this.setState({
          name: this.props.user.name,
          username: this.props.user.username,
          bio: this.props.user.bio,
          email: this.props.user.email
        });
      }
    );
  }

  handleChange(input, e) {
    this.setState({ [input]: e.target.value });
  }

  handleEditClick(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.updateEditUserInfo(user, this.props.currentUser.id)
    .then(() => this.props.history.push(`/users/${this.props.match.params.userId}`));
  }

  render() {
    const { currentUser, user } = this.props;

    if(this.props.user) {

      return (
        <div className="ue-main" >
          <div className="ue-form-contain" >

            <div className="edit-left-contain">
              <h3 className="ue-edit" >
                Edit Profile
              </h3>
            </div>

            <div className="edit-right-contain" >

              <div className="edit-right-head" >

                <div className="ue-avatar-contain">
                  <img className="ue-avatar" src={user.avatar_url} />
                </div>

                <div className="ue-username-contain">
                  <p className="ue-username-head" >{user.username}</p>
                </div>

              </div>

              <div className="ue-right-form-contain" >

                <section className="ue-form-line" >
                  <div className="ue-aside" >
                    <label className= "ue-label" >Name</label>
                  </div>
                  <div className="ue-input-contain" >
                    <input className="eu-input" type="text"
                      value={this.state.name}
                      onChange={ (e) => {this.handleChange("name", e);} }
                      ></input>
                  </div>
                </section>

                <section className="ue-form-line" >
                  <div className="ue-aside" >
                    <label className= "ue-label" >Username</label>
                  </div>
                  <div className="ue-input-contain" >
                    <input className="eu-input" type="text"
                      value={this.state.username}
                      onChange={ (e) => {this.handleChange("username", e);} }
                      ></input>
                  </div>
                </section>

                <section className="ue-form-line" >
                  <div className="ue-aside" >
                    <label className= "ue-label" >Bio</label>
                  </div>
                  <div className="ue-input-contain" >
                    <textarea className="eu-input" type="text"
                      value={this.state.bio}
                      onChange={ (e) => {this.handleChange("bio", e);} }
                      ></textarea>
                  </div>
                </section>

                <section className="ue-form-line" >
                  <div className="ue-aside" >
                    <label className= "ue-label" >Email</label>
                  </div>
                  <div className="ue-input-contain" >
                    <input className="eu-input" type="text"
                      value={this.state.email}
                      onChange={ (e) => {this.handleChange("email", e);} }
                      ></input>
                  </div>
                </section>

                <section className="ue-form-line" >
                  <div className="ue-aside" >
                    <label className= "ue-label" ></label>
                  </div>
                  <div className="ue-input-contain" >
                    <button onClick={this.handleEditClick} className="ue-submit-button" >Submit</button>
                  </div>
                </section>

              </div>
            </div>
          </div>

          <div className="eu-icon-div">
            <a target="_blank" href="https://github.com/AnthonyRondinone/artHouse"><i className="foot-icons fa fa-github" aria-hidden="true"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/anthony-rondinone-a1111446"><i className="foot-icons fa fa-linkedin" aria-hidden="true"></i></a>
            <a target="_blank" href="http://anthonyrondinone.com"><i className="foot-icons fa fa-laptop" aria-hidden="true"></i></a>
            <a target="_blank" href="mailto:a.rondinone@gmail.com"><i className="foot-icons fa fa-envelope" aria-hidden="true"></i></a>
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


export default (EditForm);
