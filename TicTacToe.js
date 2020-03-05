const Player = require('./Player');
const Board = require('./Board');
class Game
{
    constructor()
    {
        this.players = new Array(2);
        console.log(this.players);
        this.players[0] = new Player('x',0);
        this.players[1] = new Player('O',1);
        this.winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        this.board = new Board(this.winningConditions);
        this.currentPlayer = this.players[0];
    }

    start()
    {
        let win;
        while(!win)
        {
            win = this.play();
        }
        console.log("Player " + this.currentPlayer.playerNo + " won");
    }

    play()
    {
        let position = this.getValidPosition();
        this.board.palceSymbol(position, this.currentPlayer.symbol);
        this.currentPlayer.addPosition(position);
        return winCheck(this.currentPlayer.getPositions());
    }

    switchPlayer()
    {
        let nextPlayerNo = 1 - this.currentPlayer.playerNo;
        this.currentPlayer = this.players[nextPlayerNo];
    }

    getValidPosition()
    {
        let valid;
        do
        {
            let position = this.currentPlayer.input();
            valid = this.board.validatePosition(position);
        }
        while(!ivalid);
        return position;
    }
}

module.exports = Game;