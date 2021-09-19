import GamePiece from './GamePiece';

export default class PawnPiece extends GamePiece {
    constructor(player) {
        super(player, (player === 1 ? "ios" : "ios-filled"), "pawn");
    }
    getValidMoves(src, squares) {
        var i = 0;
        if (src < 0 && src > 64) { return; }
        var moveMatrix = [];

        if(this.player === 1){//needs cases where enemies are in diagonal positions
        	if(this.moved === false){
	        	moveMatrix.push(src - 8);
	        	moveMatrix.push(src - 16);
        	}
        	else{
        		moveMatrix.push(src - 8);
        	}
        }
        else{
        	if(this.moved === false){
	        	moveMatrix.push(src + 8);
	        	moveMatrix.push(src + 16);
        	}
        	else{
        		moveMatrix.push(src + 8);
        	}
        }


        for (i = 0; i < moveMatrix.length; i++) {
            if ((squares[moveMatrix[i]] === null) && (this.getValidBoardPosition(moveMatrix[i]))) {
                this.possibleMoves.push(moveMatrix[i]);
            }
        }
    }
}
