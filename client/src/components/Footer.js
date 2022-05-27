import React from 'react'

class Footer extends React.Component {

  render() {

    return (
      <div className="footer">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p>Copyright 2022 Tunestats</p>
            <a href="Tunestats_Privacy_Policy.pdf" target="blank" rel="noopener">Privacy Policy</a>
          </div>
          <div className="col">
            <p className="footer-text">
            <a href="https://developer.spotify.com/documentation/web-api/" target="blank" rel="noopener">Powered by the Spotify Web API</a>
            </p>
            <a href="https://spotify.com" target="blank" rel="noopener">
              <img className="logo-img" src="spotify_logo.png" alt='Spotify Logo' height="30px"/>
            </a>
          </div>
          <div className="col">
            <p>
              <a href="https://vedantsinghania.com" target="blank" rel="noopener">Created by Vedant Singhania</a>
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

export default Footer;
