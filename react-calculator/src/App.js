import React, {Component} from 'react';
import KeyPad from './components/KeyPad'

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <KeyPad />
      </div>
    )
  }
}

export default App;
