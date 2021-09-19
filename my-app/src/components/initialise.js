import Bishop from './BishopPiece.js';
import King from './KingPiece.js';
import Knight from './KnightPiece.js';
import Pawn from './PawnPiece.js';
import Queen from './QueenPiece.js';
import Rook from './RookPiece.js';

export default function initialiseChessBoard() {
  const squares = Array(64).fill(null);

  for (let i = 8; i < 16; i++) {
    squares[i] = new Pawn(2);
    squares[i + 40] = new Pawn(1);
  }
  
  squares[0] = new Rook(2);
  squares[7] = new Rook(2);
  squares[56] = new Rook(1);
  squares[63] = new Rook(1);

  squares[1] = new Knight(2);
  squares[6] = new Knight(2);
  squares[57] = new Knight(1);
  squares[62] = new Knight(1);

  squares[2] = new Bishop(2);
  squares[5] = new Bishop(2);
  squares[58] = new Bishop(1);
  squares[61] = new Bishop(1);

  squares[3] = new Queen(2);
  squares[4] = new King(2);

  squares[59] = new Queen(1);
  squares[60] = new King(1);

  return squares;
}

// export default function initialiseChessBoard () {
//   const squares = new Array(8);
//   for (let i = 0; i < 8; i++) {
//     squares[i] = new Array(8).fill(null);
//   }
//
//   for (let i = 0; i < 8; i++) {
//     squares[1][i] = new Pawn(2);
//     squares[6][i] = new Pawn(1);
//   }
//
//   squares[0][0] = new Rook(2);
//   squares[0][7] = new Rook(2);
//   squares[7][0] = new Rook(1);
//   squares[7][7] = new Rook(1);
//
//   squares[0][1] = new Knight(2);
//   squares[0][6] = new Knight(2);
//   squares[7][1] = new Knight(1);
//   squares[7][6] = new Knight(1);
//
//   squares[0][2] = new Bishop(2);
//   squares[0][5] = new Bishop(2);
//   squares[7][2] = new Bishop(1);
//   squares[7][5] = new Bishop(1);
//
//   squares[0][3] = new Queen(2);
//   squares[7][3] = new Queen(1);
//
//   squares[0][4] = new King(2);
//   squares[7][4] = new King(1);
//
//   return squares;
// }
