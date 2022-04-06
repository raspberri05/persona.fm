import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';

class NavLink extends React.Component {

  render() {
    return (
      <a className="nav-link" onClick={() => this.props.link()}href="/#">{this.props.name}</a>
    )
  }
}

export default NavLink;
