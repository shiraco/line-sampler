import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      line_id: 'xhc0394t',
      line_text: 'hello',
    }
  }

  handleLineSchemeLineIdChange(line_id) {
    this.setState({ line_id });
  }

  handleLineSchemeLineTextChange(line_text) {
    this.setState({ line_text });
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">line-sampler</h1>
        </header>

        <p className="App-intro">
          <h2>line-scheme</h2>

          LINE ID:
          <input
            type="text"
            value={this.state.line_id}
            onChange={e => this.handleLineSchemeLineIdChange(e.target.value)}
          />

          text:
          <input
            type="text"
            value={this.state.line_text}
            onChange={e => this.handleLineSchemeLineTextChange(e.target.value)}
          />

          <p>
            <a href="https://line.me/R/oaMessage/@{this.state.line_id}/?{this.state.line_text}">https://line.me/R/oaMessage/@{this.state.line_id}/?{this.state.line_text}</a>
          </p>

          <p>
            <a href="line://oaMessage/@{this.state.line_id}/?{this.state.line_text}">line://oaMessage/@{this.state.line_id}/?{this.state.line_text}</a>
          </p>

        </p>


      </div>
    );
  }
}

export default App;
