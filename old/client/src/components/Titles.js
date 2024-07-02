import React from "react";

class Titles extends React.Component {
  render() {
    return (
      <div>
        {this.props.condition === "all" && (
          <h2 className="h2_main">{this.props.title} (All Time)</h2>
        )}
        {this.props.condition === "six" && (
          <h2 className="h2_main">{this.props.title} (Last 6 Months)</h2>
        )}
        {this.props.condition === "last" && (
          <h2 className="h2_main">{this.props.title} (Last Month)</h2>
        )}
        <br></br>
      </div>
    );
  }
}

export default Titles;
