import GamePiece from './GamePiece';

export default class BishopPiece extends GamePiece {
    constructor(player) {
        super(player, (player === 1 ? "ios" : "ios-filled"), "bishop");
    }
    getValidMoves(src, squares) {
        var i = src;
        if (src < 0 && src > 64) { return; }
        var moveMatrix = [];
        var j = src;
        while(j >= 0){
            i -= 7;
            moveMatrix.push(i);
            j -= 9;
            moveMatrix.push(j);
        }
        moveMatrix.splice(-2, 2);
        i = src;
        j = src;
        while(j <= 63){
            i += 7;
            moveMatrix.push(i);
            j += 9; 
            moveMatrix.push(j);
        }
        moveMatrix.splice(-2, 2);
        for (i = 0; i < moveMatrix.length; i++) {
            if ((squares[moveMatrix[i]] === null) && (this.getValidBoardPosition(moveMatrix[i]))) {
                this.possibleMoves.push(moveMatrix[i]);
            }
        }
    }
}
