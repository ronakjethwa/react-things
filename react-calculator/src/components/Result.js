import React, { Component } from "react";

class Result extends Component {
  render() {
    let result = this.props.result;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default Result;
