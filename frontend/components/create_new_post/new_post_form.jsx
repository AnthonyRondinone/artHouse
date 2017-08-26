import React from 'react';
import Dropzone from 'react-dropzone';


class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      imageFile: null,
      imageURL: null
    };
    this.updateCaption = this.updateCaption.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[image]", this.state.imageFile);
    this.props.createNewPost(formData).then(() => this.props.history.push('/'));
  }

  updateCaption (e) {
    this.setState({
      caption: e.currentTarget.value
    });
  }

  updateFile(e) {
    // debugger
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageURL: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateDraggedFile (e) {
  let file = e[0];
  let fileReader = new FileReader();
  fileReader.onloadend = function() {
    this.setState({imageFile: file, imageUrl: fileReader.result });
  }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }




  render() {
    return (
      <div>
        <p>Share</p>
        <form onSubmit={this.handleSubmit}>
          <img src={ this.state.imageURL } />
          <Dropzone className="drop-zone" onDrop={this.updateDraggedFile}>Drag Image Here</Dropzone>
          <input type='file' onChange={this.updateFile} />
          <input type='text' onChange={this.updateCaption} value={this.state.caption}/>
          <button>Share post</button>
        </form>
      </div>
    );
  }



}

export default NewPostForm;
