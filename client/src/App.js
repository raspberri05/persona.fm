import React from 'react'
import $ from "jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import Footer from './components/Footer.js'
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import SmallButtonGroup from './components/SmallButtonGroup'
import SongDisplay from './components/SongDisplay.js';
import ArtistDisplay from './components/ArtistDisplay.js';
import Titles from './components/Titles.js';

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
      this.setState({loggedIn: true, tracks: 'all', main: true})

      this.getTopTracks('long_term', 'all', access_token) 
      this.getTopTracks('medium_term', 'six', access_token) 
      this.getTopTracks('short_term', 'last', access_token) 
      
      this.getTopArtists('long_term', 'all', access_token) 
      this.getTopArtists('medium_term', 'six', access_token) 
      this.getTopArtists('short_term', 'last', access_token) 

      this.getRecents(access_token)

      window.location.href = "/#"

    } else {
      this.setState({loggedIn: false})
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g
    var q = window.location.hash.substring(1);
    //eslint-disable-next-line
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

  allt = () => this.setState({tracks: 'all'})

  six = () => this.setState({tracks: 'six'})

  last = () => this.setState({tracks: 'last'})

  alltA = () => this.setState({artists: 'all'})

  sixA = () => this.setState({artists: 'six'})

  lastA = () => this.setState({artists: 'last'})

  recent = () => this.setState({tracks: 'none', artists: 'none', recents: true})

  render() {
    let { loggedIn, tracks, artists, track, artist, recents, recent } = this.state

    return (
    <div>
      
      {!loggedIn && <Login />}

      {loggedIn && <div>
      
        <NavBar link1={this.track} link2={this.artist} link3={this.recent} name1={"Top Tracks"} name2={"Top Artists"} name3={"Recently Played"}/>
          
        <div className="container-fluid">
          
          <br></br>

          {tracks !== 'none' && <div>
            <Titles condition={tracks} title={"Tracks"}/>
            <SmallButtonGroup link1={this.allt} link2={this.six} link3={this.last} />
            <SongDisplay data={track[tracks]}/>
          </div>}

          {artists !== 'none' && <div>
            <Titles condition={artists} title={"Artists"}/>
            <SmallButtonGroup link1={this.alltA} link2={this.sixA} link3={this.lastA} />
            <ArtistDisplay data={artist[artists]}/>
          </div>}

          {recents && <div>
            <h2>Recently Played</h2>
            <SongDisplay data={recent}/>
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