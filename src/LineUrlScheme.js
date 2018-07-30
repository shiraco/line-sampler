import React, { Component } from 'react';

import LineUrlSchemeHttps from './LineUrlSchemeHttps.js';
import LineUrlSchemeLine from './LineUrlSchemeLine.js';


class LineUrlScheme extends Component {
  state: {
    line_id: string,
    line_text: string,
  }

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

      <LineUrlSchemeHttps line_id={this.state.line_id} line_text={this.state.line_text} />
      <LineUrlSchemeLine line_id={this.state.line_id} line_text={this.state.line_text} />
     </p>
    );
  }
}

export default LineUrlScheme;
