import GamePiece from './GamePiece.js';

export default class KingPiece extends GamePiece {
    constructor(player) {
        super(player, (player === 1? "ios" : "ios-filled"), "king");
    }
    getValidMoves(src,squares) {
        var i = 0;
        if (src < 0 && src > 64) {return;}
        var moveMatrix = [src - 1, src + 1, src - 8, src + 8, src - 7, src + 7, src - 9, src + 9]
        for (i = 0; i < moveMatrix.length; i++) {
            if ((squares[moveMatrix[i]] === null) && (this.getValidBoardPosition(moveMatrix[i]))) {
                this.possibleMoves.push(moveMatrix[i]);
            }
        }
        console.log("true");
    }
}