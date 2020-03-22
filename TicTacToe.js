class TicTacToe
{
    constructor(player1Symbol,  player2Symbol)
    {
        this.players = [new Player(player1Symbol,0) , new Player(player2Symbol,1)];
        this.winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        this.board = new Board(this.winningConditions);
        this.view = new View();
        this.currentPlayer = this.players[0];
        this.win = false;
    }

    play(position)
    {
        if(this.win)
            return;
        this.view.placeSymbol(position, this.currentPlayer.symbol, this.currentPlayer.playerNo);
        this.win = this.board.winCheck();
        this.view.printWinner(this.getResult());
        this.switchPlayer();
        this.view.printCurrentPlayerSymbol(this.currentPlayer.getSymbol());
    }

    getResult()
    {
        let result = "";
        if(this.win)
            result = "player with symbol \'" + this.currentPlayer.getSymbol() + "\' has Won";
        else if(this.board.isBoardFilled())
            result = "No one Won";
        return result;
    }

    switchPlayer()
    {
        let nextPlayerNo = 1 - this.currentPlayer.playerNo;
        this.currentPlayer = this.players[nextPlayerNo];
    }
}