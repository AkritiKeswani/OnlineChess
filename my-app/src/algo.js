

class chessPiece{
	constructor(n){ //1 & 2 for players
		this.moved = false;
		this.possibleMoves = [];
		this.player = n;
	}
	getPosition(){
		this.x =
		this.y =
	}
	movePiece(){
		getPosition();
		for(var i = 0; i < possibleMoves.length; i+=2){
			if(x == possibleMoves[i] && y == possibleMoves[i+1]){
				this.moved = true;
				return true;
			}else{
				return false;
			}
		}
	}
}

class King extends chessPiece {//need to implement castling
	constructor(n){
		super(n);
	}
	getValidMoves(){//needs way to check if space is occupied by ally piece
		if(x != 7){
			possibleMoves.push(x + 1, y);
		}
		else if(x != 7 || y != 7){
			possibleMoves.push(x + 1, y + 1);
		}
		else if(y != 7){
			possibleMoves.push(x, y + 1);
		}
		else if(x != 0 || y != 7){
			possibleMoves.push(x - 1, y + 1);
		}
		else if(x != 0){
			possibleMoves.push(x - 1, y);
		}
		else if(x != 0 || y != 0){
			possibleMoves.push(x - 1, y - 1);	
		}
		else if(y != 0){
			possibleMoves.push(x, y - 1);
		}
		else if(x != 7 || y != 0){
			possibleMoves.push(x + 1, y -1);
		}
	}
}

class Queen extends chessPiece{
	constructor(n){
		super(n);
	}
	getValidMoves(){
		//bishop moves
		for(i = x; i < 7; i++){
			for(j = y; j < 7; j++){
				possibleMoves.push(i + 1, j + 1);
			}
			for(j = y; j > 0; j--){
				possibleMoves.push(i + 1, j - 1);
			}
		}
		for(i = x; i > 0; i--){
			for(j = y; j < 7; j++){
				possibleMoves.push(i - 1, j + 1);
			}
			for(j = y; j > 0; j--){
				possibleMoves.push(i - 1, j - 1);
			}
		}
		//rook moves
		for(i = x; i < 7; i++){
			possibleMoves.push(i + 1, y);
		}
		for(i = x; i > 0; i--){
			possibleMoves.push(i - 1, y);
		}
		for(i = y; i < 7; i++){
			possibleMoves.push(x, i + 1);
		}
		for(i = y; i < 7; i++){
			possibleMoves.push(x, i - 1);
		}
	}
}

class Bishop extends chessPiece{
	constructor(n){
		super(n);
	}
	getValidMoves(){//if case that ally piece in way, break loop
		for(i = x; i < 7; i++){
			for(j = y; j < 7; j++){
				possibleMoves.push(i + 1, j + 1);
			}
			for(j = y; j > 0; j--){
				possibleMoves.push(i + 1, j - 1);
			}
		}
		for(i = x; i > 0; i--){
			for(j = y; j < 7; j++){
				possibleMoves.push(i - 1, j + 1);
			}
			for(j = y; j > 0; j--){
				possibleMoves.push(i - 1, j - 1);
			}
		}
	}
}

class Rook extends chessPiece{
	constructor(n){
		super(n);
	}
	getValidMoves(){
		for(i = x; i < 7; i++){
			possibleMoves.push(i + 1, y);
		}
		for(i = x; i > 0; i--){
			possibleMoves.push(i - 1, y);
		}
		for(i = y; i < 7; i++){
			possibleMoves.push(x, i + 1);
		}
		for(i = y; i < 7; i++){
			possibleMoves.push(x, i - 1);
		}
	}
}

class Knight extends chessPiece{
	constructor(n){
		super(n);
	}
	getValidMoves(){
		if(x + 2 < 7){
			if(y + 1 < 7){
				possibleMoves.push(x + 2, y + 1);
			}
			else if(y - 1 > 0){
				possibleMoves.push(x + 2, y - 1);
			}
		}
		else if(x - 2 > 0){
			if(y + 1 < 7){
				possibleMoves.push(x - 2, y + 1);
			}
			else if(y - 1 > 0){
				possibleMoves.push(x - 2, y - 1);
			}
		}
		else if(y + 2 < 7){
			if(x + 1 < 7){
				possibleMoves.push(x + 1, y + 2);
			}
			else if(x - 1 > 0){
				possibleMoves.push(x - 1, y + 2);
			}
		}
		else if(y - 2 > 0){
			if(x + 1 < 7){
				possibleMoves.push(x + 1, y - 2);
			}
			else if(x - 1 > 0){
				possibleMoves.push(x - 1, y - 2);
			}
		}
	}
}

class Pawn extends chessPiece{
	constructor(n){
		super(n);
	}
	getValidMoves(){
		if(this.moved == false){
			possibleMoves.push(x, y + 1);
			possibleMoves.push(x, y + 2);
		}
		else{
			possibleMoves.push(x, y + 1);
		}

		//extra if case for enemy diagonal
	}
}