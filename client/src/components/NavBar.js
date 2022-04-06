import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import NavLink from './NavLink.js'
import SideButton from './SideButton.js'

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">Tunestats</a>
          <SideButton />
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink link={() => this.props.link1()} name={this.props.name1}/>
              <NavLink link={() => this.props.link2()} name={this.props.name2}/>
              <NavLink link={() => this.props.link3()} name={this.props.name3}/>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
