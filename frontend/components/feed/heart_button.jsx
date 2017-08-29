import React from 'react';
import { Link } from 'react-router-dom';


class HeartButton extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <img src={images.heart}></img>
    );
  }

}

export default HeartButton;
