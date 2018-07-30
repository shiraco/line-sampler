import React, { Component } from 'react';

class LineUrlSchemeHttps extends Component {
  props: {
    line_id: string,
    line_text: string,
  }

  render() {
    const url = "https://line.me/R/oaMessage/@" + (this.props.line_id) + "/?" + (this.props.line_text);

    return (
      <p>
        <a href={url}>{url}</a>
      </p>
    )
  }
}

export default LineUrlSchemeHttps;
