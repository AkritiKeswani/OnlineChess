import React, { Component } from 'react';

export default class GamePiece extends Component {
    constructor(player,fill,type) {
        super();
        this.moved = false;
        this.player = player;
        this.possibleMoves = [];
        this.style = {
            backgroundImage: "url('https://img.icons8.com/" + fill +"/45/16bd08/"+type+".png')",
            backgroundRepeat: "no-repeat"
        };

        this.getValidBoardPosition = this.getValidBoardPosition.bind(this);
    }
    getValidBoardPosition(pos) {
        if ((pos < 0) || (pos > 63)) { return false; }
        return true;
    }
    getPossibleMoves() {
      return this.possibleMoves;
    }
    getPlayer() {
        return this.player;
    }
    getInstance() {
        return this;
    }
    render() {
        return (<div></div>)
    }
}
