import React from 'react'
import $ from "jquery";
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
//import SmallButton from './components/SmallButton.js';
import SmallButtonGroup from './components/SmallButtonGroup'
import SongDisplay from './components/SongDisplay.js';
import ArtistDisplay from './components/ArtistDisplay.js';
import Titles from './components/Titles.js';
import { Container } from 'reactstrap';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false, tracks: 'none', artists: 'none', recents: false, recent: [],
      track: { all: [], six: [], last: [] }, artist: { all: [], six: [], last: [] }, 
      token: '', id: '', name: '', description: '', 
      ranges: {"all": "All Time", "six": "Last 6 Months", "last": "Last Month"},
      displayName: ''
    }
  }

  componentDidMount() {
    const access_token = this.getHashParams().access_token;
    if (access_token) {

      this.getUserInfo(access_token)

      this.setState({ loggedIn: true, tracks: 'all', main: true})

      this.getTopTracks('long_term', 'all', access_token)
      this.getTopTracks('medium_term', 'six', access_token)
      this.getTopTracks('short_term', 'last', access_token)

      this.getTopArtists('long_term', 'all', access_token)
      this.getTopArtists('medium_term', 'six', access_token)
      this.getTopArtists('short_term', 'last', access_token)

      this.getRecents(access_token)

      this.setState({ token: access_token });

      window.location.href = "/#"


    } else {
      this.setState({ loggedIn: false })
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

  getUserInfo = (token) => {
    $.ajax({
      url: 'https://api.spotify.com/v1/me',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: response => {
        console.log(response)
        this.setState({ id: response.id })
        this.setState({displayName: response.display_name})
      }
    })
  }
  
  createPlaylist = (token, id, name, description) => {
    var rawData = []
    var cleanData = []
    let tracks = this.state.tracks
    // let artists = this.state.artists
    let recents = this.state.recents
    let track = this.state.track
    // let artist = this.state.artist
    let recent = this.state.recent

    if (recents === true) {
      rawData = recent
    }
    else if (tracks !== 'none') {
      rawData = track[tracks]
    }
    // else if (artists != 'none') {
    //   rawData = artist[artists]
    // }

    for (let i = 0; i < rawData.length; i++) {
    cleanData.push(rawData[i].uri)
    }

    $.ajax({
      method: 'POST',
      url: 'https://api.spotify.com/v1/users/' + id + '/playlists',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      data: JSON.stringify({
        'name': name,
        'description': description
      }),
      json: true,
      success: response => {
        this.addToPlaylist(token, response.id, cleanData)
      },
      error: response => {
        console.log(response.responseJSON.error)
      }
    })
  }

  addToPlaylist = (token, playlistId, tracks) => {
    $.ajax({
      method: 'POST',
      url: 'https://api.spotify.com/v1/playlists/' + playlistId + '/tracks',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      data: JSON.stringify({
        'uris': tracks
      }),
      json: true,
      success: response => {
        console.log('successfully added tracks to playlist')
      },
      error: response => {
        console.log(response.responseJSON.error)
      }
    })
  }

  getTopTracks = (data, type, token) => {
    let trackInfo = this.state.track
    $.ajax({
      url: 'https://api.spotify.com/v1/me/top/tracks',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      data: {
        "time_range": data,
        "limit": 50
      },
      success: response => {
        console.log(response)
        for (let i = 0; i < 50; i++) {
          trackInfo[type].push({ uri: response['items'][i]['uri'], url: response['items'][i]['album']['images'][2]['url'], name: response['items'][i]['name'], artist: response['items'][i]['artists'][0]['name'] })
        }
        this.setState({ track: trackInfo })
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
        "limit": 50
      },
      success: response => {
        for (let i = 0; i < 50; i++) {
          artistInfo[type].push({ uri: response['items'][i]['uri'], url: response['items'][i]['images'][2]['url'], name: response['items'][i]['name'] })
        }
        this.setState({ artist: artistInfo })
      }
    });
  }

  getRecents = (token) => {
    $.ajax({
      url: 'https://api.spotify.com/v1/me/player/recently-played',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      data : {
        "limit": 50
      },
      success: response => {
        let recentInfo = this.state.recent
        for (let i = 0; i < 50; i++) {
          recentInfo.push({ uri: response['items'][i]['track']['uri'], url: response['items'][i]['track']['album']['images'][2]['url'], name: response['items'][i]['track']['name'], artist: response['items'][i]['track']['artists'][0]['name'] })
        }
        this.setState({ recent: recentInfo })
      }
    });
  }

  track = () => {
    this.setState({ tracks: 'all', artists: 'none', recents: false })
    this.allt();
  }

  artist = () => {
    this.setState({ tracks: 'none', artists: 'all', recents: false })
    this.alltA();
  }

  allt = () => this.setState({ tracks: 'all' })

  six = () => this.setState({ tracks: 'six' })

  last = () => this.setState({ tracks: 'last' })

  alltA = () => this.setState({ artists: 'all' })

  sixA = () => this.setState({ artists: 'six' })

  lastA = () => this.setState({ artists: 'last' })

  recent = () => this.setState({ tracks: 'none', artists: 'none', recents: true })

  logout = () => window.location.href = '/'

  render() {
    let { loggedIn, tracks, artists, track, artist, recents, recent, token, id, ranges, displayName } = this.state

    return (
      <div>

        {!loggedIn && <Login />}

        {loggedIn && <div>

          <NavBar logout={this.logout} link1={this.track} link2={this.artist} link3={this.recent} name1={"Top Tracks"} name2={"Top Artists"} name3={"Recently Played"} />

          <Container fluid>
            
            <br></br>
            
            {(tracks === 'none' && artists === 'none') ? <h2 className="h2_main">{displayName}'s Recently Played Tracks</h2> : (tracks !== 'none' ? <Titles condition={tracks} title={displayName + "'s Top 50 Tracks"} /> : <Titles condition={artists} title={displayName + "'s Top 50 Artists"} />)}

            {tracks !== 'none' && <SmallButtonGroup link1={this.allt} link2={this.six} link3={this.last} />}
            {artists !== 'none' && <SmallButtonGroup link1={this.alltA} link2={this.sixA} link3={this.lastA} />}

            {artists === 'none' && <br></br>}
            {tracks !== 'none' && <button className="btn btn-playlist btn-md" onClick={() => this.createPlaylist(token, id,'Top 20 Tracks (' + ranges[tracks] + ')', String(new Date()))}>Create Playlist</button>}
            {/* {artists !== 'none' && <Button onClick={() => this.createPlaylist(token, id, 'Top 20 Artists (' + ranges[artists] + ')', String(new Date()))}>Create Playlist</Button>} */}
            {recents === true && <button className="btn btn-playlist btn-md" onClick={() => this.createPlaylist(token, id, 'Recently Played', String(new Date()))}>Create Playlist</button>}
            { artists === 'none' && <br></br>}
            <br></br>

            {(tracks === 'none' && artists === 'none') ? <SongDisplay data={recent} /> : (tracks !== 'none' ? <SongDisplay data={track[tracks]} /> : <ArtistDisplay data={artist[artists]} />)}

          </Container>

          <br></br>

        </div>}

        <Footer />

      </div>
    )

  }
}

export default App;