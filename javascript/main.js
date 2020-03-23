class Main
{
    start(player1Symbol, player2Symbol)
    {
        let players = [new Player(player1Symbol,0) , new Player(player2Symbol,1)];
        let board = new Board();
        let view = new View();
        this.ticTacToe = new TicTacToe(players, board, view);
    }
    play(position)
    {
        this.ticTacToe.play(position);
    }
}