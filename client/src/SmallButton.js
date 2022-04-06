import React from 'react'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class SmallButton extends React.Component {

  render() {
    return (
      <button className="btn btn-success btn-sm" onClick={() => this.props.link()}href="/#">{this.props.name}</button>
    )
  }
}

export default SmallButton;
