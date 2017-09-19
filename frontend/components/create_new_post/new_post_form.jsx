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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDraggedFile = this.updateDraggedFile.bind(this);
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



  updateDraggedFile (e) {
  let file = e[0];
  let fileReader = new FileReader();
  fileReader.onloadend = function() {
    this.setState({imageFile: file, imageURL: fileReader.result });
  }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
      $('.drag-zone').remove();
    }
  }




  render() {
    let dropClass = "drop-zone";
    if (this.state.imageURL) {
      dropClass = 'remove';
    }
    return (
      <div className="main-create" >
        <div className="inside-create" >

          <p className="create" >Create</p>

          <form onSubmit={this.handleSubmit}>

            <div className="preview-contain" >
              <img className="preview" src={ this.state.imageURL } />
            </div>

            <Dropzone className={dropClass} onDrop={this.updateDraggedFile}>
              <p>Click to upload</p>
              <p>OR</p>
              <p>Drag and Drop Image</p>
            </Dropzone>

            <div className="caption">
              <input className="caption-input"
                type='text'
                placeholder="Add caption . . ."
                onChange={this.updateCaption}
                value={this.state.caption}/>
            </div>
            <div className="button-contain">
              <button className="share-button">Share post</button>
            </div>

          </form>

        </div>
      </div>
    );
  }



}

export default NewPostForm;
