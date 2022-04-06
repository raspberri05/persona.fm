import React from 'react'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import LoginFooter from './LoginFooter.js'

class Login extends React.Component {

  render() {

    return (
      <div className="text-center">
        
        <br></br>

        <h1 className="h1-login">Tunestats</h1>

        <br></br>

        {/* <a href="http://localhost:3001/login" className="btn btn-titlebtn-success btn-lg">Log in with Spotify</a> */}
        <a href="/login" className="btn btn-success btn-lg">Log in with Spotify</a>

        <br></br>
        <br></br>
        <br></br>

        <h3>Tunestats is a website for Spotify users to be able to see their top songs, artists, and recently played songs</h3>
        <LoginFooter />
      </div>
    )
  }
}

export default Login;
