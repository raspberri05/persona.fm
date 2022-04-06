import React from 'react'
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
import SmallButton from './SmallButton.js'

class SmallButtonGroup extends React.Component {

  render() {
    return (
      <div className='text-center'>
        <div className="btn-group" role="group">
          <SmallButton link={() => this.props.link1()} name="All Time"/>
          <SmallButton link={() => this.props.link2()} name="Last 6 Months"/>
          <SmallButton link={() => this.props.link3()} name="Last Month"/>
        </div>
      </div>
    )
  }
}

export default SmallButtonGroup;
