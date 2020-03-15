const Player = require('./Player');
const Board = require('./Board');
class TicTacToe
{
    constructor()
    {
        this.players = [new Player('x',0) , new Player('O',1)];
        this.winningConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
        this.board = new Board(this.winningConditions);
        this.currentPlayer = this.players[0];
    }

    start()
    {
        let win;
        while(!win && !this.board.isBoardFilled()){
            win = this.play();
            this.switchPlayer();
        }
        this.switchPlayer();
        this.printWinner(win);
    }

    printWinner(win)
    {
        let sentence = "Player " + (this.currentPlayer.playerNo + 1);
        if(win == false){
             sentence = "No one";
        }
        console.log(sentence + " won");
    }

    play()
    {
        let position = this.getValidPosition();
        this.board.placeSymbol(position, this.currentPlayer.symbol);
        this.currentPlayer.addPosition(position);
        this.board.printBoard();
        return this.board.winCheck(this.currentPlayer.getPositions());
    }

    switchPlayer()
    {
        let nextPlayerNo = 1 - this.currentPlayer.playerNo;
        this.currentPlayer = this.players[nextPlayerNo];
    }

    getValidPosition()
    {
        let valid, position;
        do{
            position = this.getPosition();
            valid = this.board.validatePosition(position);
        }
        while(!valid);
        return position;
    }

    getPosition()
    {
        let sentence = "Player " + (this.currentPlayer.playerNo+1) + " position:";
        return parseInt(require('readline-sync').question(sentence));
    }

}

module.exports = TicTacToe;