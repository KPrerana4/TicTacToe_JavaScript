class TicTacToe
{
    constructor(players, board, view)
    {
        this.players = players;
        this.winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        this.board = board;
        this.board.setWinningConditions(this.winningConditions);
        this.view = view;
        this.currentPlayer = this.players[0];
        this.win = false;
    }

    play(position)
    {
        if(this.win)
            return;
        this.view.placeSymbol(position, this.currentPlayer.symbol, this.currentPlayer.playerNo);
        this.board.updateGrid(position, this.currentPlayer.symbol);
        this.win = this.board.winCheck();
        this.view.printWinner(this.getResult());
        this.switchPlayer();
        this.view.displayCurrentPlayerDetails(this.currentPlayer.playerNo, this.currentPlayer.getSymbol());
    }

    getResult()
    {
        let result = "";
        if(this.win){
            result = this.currentPlayer.playerNo;
        }
        else if(this.board.isBoardFilled())
            result = "tie";
        return result;
    }

    switchPlayer()
    {
        let nextPlayerNo = 1 - this.currentPlayer.playerNo;
        this.currentPlayer = this.players[nextPlayerNo];
    }
}