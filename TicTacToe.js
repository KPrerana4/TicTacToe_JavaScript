class TicTacToe
{
    constructor(player1Symbol,  player2Symbol)
    {
        this.players = [new Player(player1Symbol,0) , new Player(player2Symbol,1)];
        this.winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        this.board = new Board(this.winningConditions);
        this.currentPlayer = this.players[0];
        this.win = false;
    }

    start(position)
    {
        if(this.win)
            return;
        this.win = this.play(position);
        this.printWinner(this.win);
        this.switchPlayer();
    }

    printWinner(win)
    {
        if(win)
            document.getElementById("result").innerHTML = "You Won";
        else if(this.board.isBoardFilled())
            document.getElementById("result").innerHTML = "No one Won";
    }

    play(position)
    {
        this.board.placeSymbol(position, this.currentPlayer.symbol);
        return this.board.winCheck();
    }

    switchPlayer()
    {
        let nextPlayerNo = 1 - this.currentPlayer.playerNo;
        this.currentPlayer = this.players[nextPlayerNo];
    }
}