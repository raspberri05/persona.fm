import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap';

class Login extends React.Component {

  render() {

    return (
      <Container fluid className="text-center">
        
        <br></br>

        <h1>Tunestats</h1>

        <br></br>
        <Button size="lg" className="login-button" href="http://localhost:3001/login">Log in with Spotify</Button>

        <br></br>
        <br></br>

        <h2>View your top songs, artists, and recently played songs!</h2>
        <h2>Please login with your Spotify account using the button above to begin</h2>

        <br></br>
        <br></br>

        <div className="container">
          <Row>
            <Col md="6">
            </Col>
            <Col md="6">
              <h2>Simple and Secure</h2>
              <p className="greentext">With a single click, you can log in with your Spotify account to view your top songs, artists, and recently played songs without worrying about the safety of your data.</p>
              <br></br>
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                 Security comes first
                 </h4>
              <p className="greentext">Privacy is very important, and therefore this platform does not store or sell any information.</p>
              <br></br>
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
                  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                  <path fillRule="evenodd" d="M12 3v10h-1V3h1z"/>
                  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                  <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                 Easily see your top songs and artists
              </h4>
              <p className="greentext">Tunestats allows you to view your top songs and artists with a simple navigation bar.</p>
              <br></br>
              <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
                 Recall recently played songs
              </h4>
              <p className="greentext">If you can't recall a song you recently played, this feature will allow to do just that.</p>
            </Col>
          </Row>
        </div>

        <br></br>
        <br></br>
        <br></br>

      </Container>
    )
  }
}

export default Login;
