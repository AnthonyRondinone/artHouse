import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      post_id: this.props.postId
    };
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state);
    this.setState({body: ""});
  }


  render() {
    return (
      <div className="form-contain">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input
            className="comment-input"
            id={this.props.postId}
            type="text"
            onChange={this.handleBodyChange}
            value={this.state.body}
            placeholder="Add comment . . ." >
          </input>
        </form>
      </div>
    );
  }


}

export default CommentForm;
