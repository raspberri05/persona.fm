import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

class ArtistDisplay extends React.Component {

  render() {

    return (
      <div>
        {this.props.data.map((a, i) => <ListGroup className='list-group' key={i}>
          <a href={a.uri} target='_blank' rel="noreferrer">
            <ListGroupItem className='list-group-item'>
              <div className='row'>
                <div className='col col-auto'>
                  <img className='cropped' src={a.url} alt={a.name + 'profile picture'} />
                </div>
                <div className='col textsize'>
                  <div className='ms-2 me-auto'>
                    <div className='fw-bold'>{a.name}</div>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </a>
        </ListGroup>)}
      </div>
    )
  }
}

export default ArtistDisplay;
