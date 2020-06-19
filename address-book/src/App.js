import React, { Component } from "react";
import Form from './Form'
class App extends Component{
  
  constructor(props){
    super(props);
  }

  state = {
    characters: [],
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render(){
    const { characters } = this.state;

    return (
      <div className="container">
        <h1>Address Book</h1>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }

}

export default App;
