// Referenced: https://www.techighness.com/post/develop-two-player-chess-game-with-react-js/

import React from 'react';
import '../index.css';

export default function Square(props) {
  return (
    <button
      className={"square " + props.shade}
      onClick={props.onClick}
      style={props.style}>
    </button>
  );
}
