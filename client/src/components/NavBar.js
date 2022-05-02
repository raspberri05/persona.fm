import React from 'react'

class NavBar extends React.Component {

  render() {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark">
         <div className="container-fluid">
           <a className="navbar-brand" href="/#">Tunestats</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <svg xmlns="http:www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
               <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
             </svg>
           </button>
           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav">
                <a className="nav-link" onClick={() => this.props.link1()} href="/#">{this.props.name1}</a>
                <a className="nav-link" onClick={() => this.props.link2()} href="/#">{this.props.name2}</a>
                <a className="nav-link" onClick={() => this.props.link3()} href="/#">{this.props.name3}</a>
             </div>
           </div>
         </div>
       </nav>
    )
  }
}

export default NavBar;
