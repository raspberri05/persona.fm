import React from 'react'
import $ from "jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Footer from './Footer.js'
import Login from './Login.js'
import NavBar from './NavBar.js'
import SmallButtonGroup from './SmallButtonGroup'

class App extends React.Component {
  constructor() {
    super();
    this.state = {loggedIn: false, tracks: 'none', artists: 'none', recents: false, recent: [],
    track: { all: [], six: [], last: [] }, artist: { all: [], six: [], last: [] }
    }
  }

  componentDidMount() {
    const access_token = this.getHashParams().access_token;
    if (access_token) {
      this.setState({loggedIn: true})
      this.setState({tracks: 'all'})
      this.setState({main: true})

      this.getTopTracks('long_term', 'all', access_token) 
      this.getTopTracks('medium_term', 'six', access_token) 
      this.getTopTracks('short_term', 'last', access_token) 
      
      this.getTopArtists('long_term', 'all', access_token) 
      this.getTopArtists('medium_term', 'six', access_token) 
      this.getTopArtists('short_term', 'last', access_token) 

      this.getRecents(access_token)

      window.location.href = "/#"

    } else {
      // render initial screen
      this.setState({loggedIn: false})

    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g
    var q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getTopTracks = (data, type, token) => {
    let trackInfo = this.state.track
    $.ajax({
      url: 'https://api.spotify.com/v1/me/top/tracks',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      data: {
        "time_range": data
      },
      success: response =>  {
        for (let i = 0; i < 20; i++) {
          trackInfo[type].push( {uri: response['items'][i]['uri'], url: response['items'][i]['album']['images'][2]['url'], name: response['items'][i]['name'], artist: response['items'][i]['artists'][0]['name']} )
        }
        this.setState({track: trackInfo})
      }
    }); 
  }

  getTopArtists = (data, type, token) => {
    let artistInfo = this.state.artist
    $.ajax({
      url: 'https://api.spotify.com/v1/me/top/artists',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      data: {
        "time_range": data,
      },
      success: response => {
        for (let i = 0; i < 20; i++) {
          artistInfo[type].push( {uri: response['items'][i]['uri'], url: response['items'][i]['images'][2]['url'], name: response['items'][i]['name']} )
        }
        this.setState({artist: artistInfo})
      }
    }); 
  }

  getRecents = (token) => {
  $.ajax({
    url: 'https://api.spotify.com/v1/me/player/recently-played',
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: response =>  {
      let recentInfo = this.state.recent
      for (let i = 0; i < 20; i++) {
        recentInfo.push( {uri: response['items'][i]['track']['uri'], url: response['items'][i]['track']['album']['images'][2]['url'], name: response['items'][i]['track']['name'], artist: response['items'][i]['track']['artists'][0]['name'] })
      }
      this.setState({recent: recentInfo})
    }
  });
}

  track = () => {
    this.setState({tracks: 'all', artists: 'none', recents: false})
    this.allt();
  }

  artist = () => {
    this.setState({tracks: 'none', artists:'all', recents: false})
    this.alltA();
  }

  allt = () => {
    this.setState({tracks: 'all'})
  }

  six = () => {
    this.setState({tracks: 'six'})
  }

  last = () => {
    this.setState({tracks: 'last'})
  }

  alltA = () => {
    this.setState({artists: 'all'})
  }

  sixA = () => {
    this.setState({artists: 'six'})
  }

  lastA = () => {
    this.setState({artists: 'last'})
  }

  recent = () => {
    this.setState({tracks: 'none', artists: 'none', recents: true})
  }

  render() {
    let { loggedIn, tracks, artists, track, artist, recents, recent } = this.state

    return (
    <div>
      
      {!loggedIn && <Login />}

      {loggedIn && <div>
      
        <NavBar link1={this.track} link2={this.artist} link3={this.recent}/>
          
        <div className="container-fluid">
          
          <br></br>

          {tracks !== 'none' && <div>
            { tracks === 'all' && <h2>Top 20 Tracks (All Time)</h2>}
            { tracks === 'six' && <h2>Top 20 Tracks (Last 6 Months)</h2>}
            { tracks === 'last' && <h2>Top 20 Tracks (Last Month)</h2>}
            <SmallButtonGroup link1={this.allt} link2={this.six} link3={this.last}/>
            {track[tracks].map((a, i) => <ol className='list-group' key={i}>
              <a href={a.uri} target='_blank' rel="noreferrer">
                <li className='list-group-item'>
                  <div className='row'>
                    <div className='col col-auto'>
                      <img className='cropped imga' src={a.url} alt={a.name + "album image"}/>
                    </div>
                    <div className='col textsize'>
                      <div className='ms-2 me-auto'>
                        <div className='fw-bold'>{a.name}</div>
                        {a.artist}
                      </div>
                    </div>
                  </div>
                </li>
              </a>
            </ol>)}
          </div>}

          {artists !== 'none' && <div>
            { artists === 'all' && <h2>Top 20 Artists (All Time)</h2>}
            { artists === 'six' && <h2>Top 20 Artists (Last 6 Months)</h2>}
            { artists === 'last' && <h2>Top 20 Artists (Last Month)</h2>}
            <SmallButtonGroup link1={this.alltA} link2={this.sixA} link3={this.lastA}/>
            {artist[artists].map((a, i) => <ol className='list-group' key={i}>
              <a href={a.uri} target='_blank' rel="noreferrer">
                <li className='list-group-item'>
                  <div className='row'>
                    <div className='col col-auto'>
                      <img className='cropped imga' src={a.url} alt={a.name + 'profile picture'}/>
                    </div>
                    <div className='col textsize'>
                      <div className='ms-2 me-auto'>
                        <div className='fw-bold'>{a.name}</div>
                      </div>
                    </div>
                  </div>
                </li>
              </a>
            </ol>)}
          </div>}

          {recents && <div>
            <h2>Recently Played</h2>
            {recent.map((a, i) => <ol className='list-group' key={i}>
              <a href={a.uri} target='_blank' rel="noreferrer">
                <li className='list-group-item'>
                  <div className='row'>
                    <div className='col col-auto'>
                      <img className='cropped imga' src={a.url} alt={a.name + 'album cover'}/>
                    </div>
                    <div className='col textsize'>
                      <div className='ms-2 me-auto'>
                        <div className='fw-bold'>{a.name}</div>
                        {a.artist}
                      </div>
                    </div>
                  </div>
                </li>
              </a>
            </ol>)}
          </div>}

        </div>

        <br></br>

        <Footer />

      </div>}

    </div>
    )

  }
}

export default App;
