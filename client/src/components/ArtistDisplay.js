import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';

class ArtistDisplay extends React.Component {

  render() {

    return (
      <div>
        {this.props.data.map((a, i) => <ol className='list-group' key={i}> 
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
      </div>
    )
  }
}

export default ArtistDisplay;
