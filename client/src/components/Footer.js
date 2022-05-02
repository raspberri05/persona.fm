import React from 'react'

class Footer extends React.Component {

  render() {

    return (
      <div class="footer">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <p>Copyright 2022 Tunestats</p>
            <a href="Tunestats_Privacy_Policy.pdf" target="blank" rel="noopener">Privacy Policy</a>
          </div>
          <div class="col">
            <p class="footer-text">
            <a href="https://developer.spotify.com/documentation/web-api/" target="blank" rel="noopener">Powered by the Spotify Web API</a>
            </p>
            <a href="https://spotify.com" target="blank" rel="noopener">
              <img class="logo-img" src="spotify_logo.png" alt='Spotify Logo' height="30px"/>
            </a>
          </div>
          <div class="col">
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
