import React from 'react'

class Titles extends React.Component {

  render() {

    return (
      <div className="text-center">
        { this.props.condition === 'all' && <h2>Top 20 {this.props.title} (All Time)</h2>}
        { this.props.condition === 'six' && <h2>Top 20 {this.props.title} (Last 6 Months)</h2>}
        { this.props.condition === 'last' && <h2>Top 20 {this.props.title} (Last Month)</h2>}
      </div>
    )
  }
}

export default Titles;
