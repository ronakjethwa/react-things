import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", id: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) return;
    const newEntry = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newEntry),
      text: "",
    }));
  }

  handleClear(e) {
    e.preventDefault();
    // console.log("Clearing list");
    this.setState((state) => ({
      items: [],
      text: "",
    }));
  }

  render() {
    // return null;
    return (
      <div>
        <h2 className="title">Todo App ({this.state.items.length} Tasks)</h2>
        <form>
          <label htmlFor="todo">Add a task</label>
          <input
            id="todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br />
          <button onClick={this.handleSubmit}>
            Add Entry #{this.state.items.length + 1}
          </button>
          <button onClick={this.handleClear}>Clear Entries</button>
        </form>
        <Tasks items={this.state.items} />
      </div>
    );
  }
}

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <p className="bold">Todos</p>
        <ol>
          {this.props.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ol>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
