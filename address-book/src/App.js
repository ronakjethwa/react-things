import React, { Component } from "react";

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
      </div>
    )
  }

}

export default App;
