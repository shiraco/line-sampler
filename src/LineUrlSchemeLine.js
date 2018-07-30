import React, { Component } from 'react';

class LineUrlSchemeLine extends Component {
  props: {
    line_id: string,
    line_text: string,
  }

  render() {
    const url = "line://oaMessage/@" + (this.props.line_id) + "/?" + (this.props.line_text);

    return (
      <p>
        <a href={url}>{url}</a>
      </p>
    )
  }
}

export default LineUrlSchemeLine;
