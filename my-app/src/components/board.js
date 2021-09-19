// RRefenced: https://www.techighness.com/post/develop-two-player-chess-game-with-react-js/

import React from 'react';
import Square from './square.js';

import '../index.css';

export default class Chessboard extends React.Component {
  renderSquare (i, squareShade) {
    return <Square
    piece = {this.props.squares[i]}
    style = {this.props.squares[i] ? this.props.squares[i].style : null}
    shade = {squareShade}
    onClick = {() => this.props.onClick(i)}
    />
  }

  render() {
    const chessboard = [];
    for (let i = 0; i < 8; i++){
      let squareRows = [];
      for (let j = 0; j < 8; j++) {
        const squareShade = ((i%2===0 && j%2===0) || (i%2!==0 && j%2!==0)) ? "white-square" : "black-square";
        squareRows.push(this.renderSquare((i*8) + j, squareShade));
      }
      chessboard.push(<div className="board-row">{squareRows}</div>);
    }

    return (
      <div>
        {chessboard}
      </div>
    );
  }
}
