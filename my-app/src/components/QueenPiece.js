import GamePiece from './GamePiece';

export default class QueenPiece extends GamePiece {
    constructor(player) {
        super(player, (player === 1 ? "ios" : "ios-filled"), "queen");
    }
    getValidMoves(src, squares) {
        var i = src;
        if (src < 0 && src > 64) { return; }
        var moveMatrix = [];

        //bishop moves
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

        //rook moves
        if(src < 8){ //if rook piece is in first row
            j = src;
            for(i = 0; i < 8; i++){
                if(i !== src){
                    moveMatrix.push(i);
                }
                j += 8;
                moveMatrix.push(j);
            }
            moveMatrix.pop();
        }
        else if(src > 7 && src < 56){ //if rook piece is in any other row
            j = src;
            while(j % 8 !== 0){
                j--;
            }
            //horizontal movement
            for(i = j; i < j + 8; i++){
                if(i !== src){
                    moveMatrix.push(i);
                }
            }
            //upward movement
            j = src;
            while(j >= 0){
                j -= 8;
                moveMatrix.push(j);
            }
            moveMatrix.pop();
            //downward movement;
            j = src;
            while(j <= 63){
                j += 8;
                moveMatrix.push(j);
            }
            moveMatrix.pop();
        }
        else{ //if rook piece is in last row
            j = src;
            for(i = 56; i < 64; i++){
                if(i !== src){
                    moveMatrix.push(i);
                }
                j -= 8;
                moveMatrix.push(j);
            }
            moveMatrix.pop();
        }

        for (i = 0; i < moveMatrix.length; i++) {
            if ((squares[moveMatrix[i]] === null) && (this.getValidBoardPosition(moveMatrix[i]))) {
                this.possibleMoves.push(moveMatrix[i]);
            }
        }
    }
}
