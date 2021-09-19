import React from 'react';
import Square from './square.js';

import '../index.css';

export default class Captured extends React.Component {
  renderSquare (i) {
    return <Square
    piece = {this.props.squares[i]}
    style = {this.props.squares[i] ? this.props.squares[i].style : null}
    shade = {"captured-square"}
    onClick = {() => this.props.onClick(i)}
    />
  }

  render() {
    const captured = [];
    for (let i = 0; i < 16; i++) {
      captured.push(this.renderSquare(i));
    }

    return (
      <div>
        {captured}
      </div>
    );
  }
}
