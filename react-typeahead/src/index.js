import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';

import options from './data';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import './index.css';

class TypeaheadExample extends React.Component {
  state = {
    selected: [],
  };

  render() {
    return (
      <Typeahead
        {...this.state}
        id="basic-example"
        onChange={selected => this.setState({ selected })}
        options={options}
        placeholder="Choose a state..."
      />
    );
  }
}

ReactDOM.render(<TypeaheadExample />, document.getElementById('root'));
