import React, { Component } from 'react';
import './App.css';

import LineUrlScheme from './LineUrlScheme.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">line-sampler</h1>
        </header>

        <LineUrlScheme />

      </div>
    );
  }
}

export default App;
