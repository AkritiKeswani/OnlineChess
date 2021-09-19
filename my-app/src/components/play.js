import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css';
import Chessboard from './board.js';
import Captured from './captured.js';
import initialiseChessBoard from './initialise.js';

import db from "../config";

export default class Play extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: initialiseChessBoard(),
      player: 1,
      status: '',
      squareSelection: -1,
      captured1: [],
      captured2: [],
    }
  }

  //Single click event could allow players to click around on their pieces and see the move options
  handleClick(i) {
    const squares = this.state.squares.slice();

    console.log(squares[i]);

    if (this.state.squareSelection === -1) {
      if (!squares[i] || squares[i].player !== this.state.player) {
        this.setState({status: "Wrong selection!"});
        if (squares[i]) {
          squares[i].style = {...squares[i].style, backgroundColor: ""};
        }
      } else {
        squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,222,111)"};
        this.setState({
          status: "Choose destination",
          squareSelection: i,
        })
      }
    } else {
      if (this.state.squareSelection !== -1) {
        squares[this.state.squareSelection].style = {...squares[this.state.squareSelection].style,backgroundColor: ""};

        if (squares[i] && squares[i].player === this.state.player) {
          this.setState({
            status: "Wrong selection",
            squareSelection: -1
          });
        } else {
          const isEndOccupied = Boolean(squares[i]);

          squares[this.state.squareSelection].getValidMoves(this.state.squareSelection, squares);
          let possibleMoves = squares[this.state.squareSelection].getPossibleMoves();
          console.log(this.state.squareSelection);
          console.log(possibleMoves);
          console.log(i)

          if (possibleMoves.includes(i)) {
            let updatedCaptured1 = [];
            let updatedCaptured2 = [];

            // Handle occupied new location
            if (Boolean(squares[i])) {
              console.log("Proceed with capture");

              if (this.state.player === 1) {
                updatedCaptured1.push(squares[i]);
              } else {
                updatedCaptured2.push(squares[i]);
              }
            }

            squares[i] = squares[this.state.squareSelection];
            squares[this.state.squareSelection] = null;

            let player = this.state.player === 1 ? 2 : 1;

            this.setState(oldState => ({
              squareSelection: -1,
              squares,
              player,
              status: '',
              captured1: [...oldState.captured1, ...updatedCaptured1],
              captured2: [...oldState.captured2, ...updatedCaptured2],
            }));

          } else {
            this.setState({
              status: "Wrong Selection",
              sourceSelection: -1
            });
          }
        }
      }
    }
  }

  updateBoard() {

  }

  render() {
    return (
      <div>
        <Container className="play">
          <Row>
            <div className="captured2" id="captured">
              Pieces Captured By Player 2:
              <Captured
              squares = {this.state.captured2}
              />
            </div>
          </Row>
          <Row>
            <Col>
              <div className="chessboard">
                <Chessboard
                squares = {this.state.squares}
                onClick = {(i) => this.handleClick(i)}
                />
              </div>
            </Col>
            <Col>
              <Row>
                <div className="current-player">
                  Current Player: {this.state.player}
                </div>
              </Row>
              <Row>
                <div className="play-status">
                  Play Status: {this.state.status}
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <div className="captured1" id="captured">
              Pieces Captured By Player 1:
              <Captured
              squares = {this.state.captured1}
              />
            </div>
          </ Row>
        </Container>
      </div>
      );
  }
}
