import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap'

class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar expand="md">
        <NavbarBrand href="#">Tunestats</NavbarBrand>
        <NavbarToggler onClick={this.toggle}>
          <svg xmlns="http:www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem className="nav greenbg" onClick={() => this.props.link1()}>{this.props.name1}</NavItem>
            <NavItem className="nav greenbg" onClick={() => this.props.link2()}>{this.props.name2}</NavItem>
            <NavItem className="nav greenbg" onClick={() => this.props.link3()}>{this.props.name3}</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
