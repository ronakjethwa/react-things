import React, { Component } from "react";
import KeyPad from "./components/KeyPad";
import Result from "./components/Result";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }


    this.setState({
      // eval() simply gets the job done quickly here!
      // do not use eval() in production code
      // eslint-disable-next-line
      result : eval(checkResult),
    })
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <h2>React Calculator</h2>
        <Result result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
