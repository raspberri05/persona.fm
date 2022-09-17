import React from 'react'
import SmallButton from './SmallButton.js'

class SmallButtonGroup extends React.Component {

  render() {
    return (
      <div className='text-center'>
        <div className="btn-group" role="group">
          <SmallButton link={() => this.props.link1()} name='All Time' />
          <SmallButton link={() => this.props.link2()} name='Last 6 Months' />
          <SmallButton link={() => this.props.link3()} name='Last Month' />
        </div>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default SmallButtonGroup;
