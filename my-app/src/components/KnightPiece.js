import GamePiece from './GamePiece';

export default class KnightPiece extends GamePiece {
    constructor(player) {
        super(player, (player === 1 ? "ios" : "ios-filled"), "knight");
    }
    getValidMoves(src, squares) {
        var i = src;
        if (src < 0 && src > 64) { return; }
        var moveMatrix = [];

        var j = 0;
        while(i % 8 !== 0){
            i--;
            j++;
        }
        if(j === 0){
            if(src + 16 <= 63){
                moveMatrix.push(src + 10);
                moveMatrix.push(src + 17);
            }
            else if(src - 16 >= 0){
                moveMatrix.push(src - 6);
                moveMatrix.push(src - 15);
            }
        }
        else if(j === 1){
            if(src + 16 <= 63){
                moveMatrix.push(src + 10);
                moveMatrix.push(src + 15)
                moveMatrix.push(src + 17);
            }
            else if(src - 16 >= 0){
                moveMatrix.push(src - 6);
                moveMatrix.push(src - 15);
                moveMatrix.push(src - 17);
            }
        }
        else if(j === 6){
            if(src + 16 <= 63){
                moveMatrix.push(src + 6);
                moveMatrix.push(src + 15);
                moveMatrix.push(src + 17);
            }
            else if(src - 16 >= 0){
                moveMatrix.push(src - 10);
                moveMatrix.push(src - 15);
                moveMatrix.push(src - 17);
            }
        }
        else if(j === 7){
            if(src + 16 <= 63){
                moveMatrix.push(src + 6);
                moveMatrix.push(src + 15);
            }
            else if(src - 16 >= 0){
                moveMatrix.push(src - 10);
                moveMatrix.push(src - 17);
            }
        }
        else{
            if(src + 16 <= 63){
                moveMatrix.push(src + 6);
                moveMatrix.push(src + 10);
                moveMatrix.push(src + 15);
                moveMatrix.push(src + 17);
            }
            else if(src - 16 >= 0){
                moveMatrix.push(src - 6);
                moveMatrix.push(src - 10);
                moveMatrix.push(src - 15);
                moveMatrix.push(src - 17);
            }
        }

        for (i = 0; i < moveMatrix.length; i++) {
            if ((squares[moveMatrix[i]] === null) && (this.getValidBoardPosition(moveMatrix[i]))) {
                this.possibleMoves.push(moveMatrix[i]);
            }
        }
    }
}
