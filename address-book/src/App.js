import React, { Component } from "react";
import './Form';
class App extends Component{
  
  constructor(props){
    super(props);
  }

  state = {
    addresses : [],
  };

  render(){
    const { addresses } = this.state;

    return (
      <div className="container">
        <h1>Address Book</h1>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }

}

export default App;
