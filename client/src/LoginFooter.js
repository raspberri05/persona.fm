import React from 'react'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import spotify_logo from './spotify_logo.png'

class LoginFooter extends React.Component {

  render() {

    return (
      <div className="footer footer-login">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <p>© 2022 Tunestats. All Rights Reserved</p>
              <a href="https://docs.google.com/document/d/e/2PACX-1vRv6Zh3olDlKpcOXZDw9vw9mNA5_sT_LXIs2BWdQ_AafbPkY1Xo6jHZVu5N4JZ-ivRYDTUZJHlf9yF2/pub" target="blank" rel="noopener">Privacy Policy</a>
            </div>
            <div className="col">
              <p className="footer-text">Powered by the
              <a href="https://developer.spotify.com/documentation/web-api/" target="blank" rel="noopener"> Spotify Web API</a>
              </p>
              <a href="https://spotify.com" target="blank" rel="noopener">
                <img className="logo-img" src={spotify_logo} alt="Spotify Logo"/>
              </a>
            </div>
            <div className="col">
              <p>Created by
                <a href="https://vedantsinghania.com" target="blank" rel="noopener"> Vedant Singhania</a>
                </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf4BjRvc_r3IPDzKuyZ4OKcoiSOOwHBw0HH3-TZO7N1gklEdQ/viewform?usp=sf_link" target="blank" rel="noopener">
              Website Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginFooter;
