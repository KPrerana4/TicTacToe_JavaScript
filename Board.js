class Board
{
    constructor(winningConditions)
    {
        this.winningConditions = winningConditions;
        this.grid = new Array(9);
        this.grid.fill('-');
    }

    validatePosition(position)
    {
        return position >= 0 && position < 9 && this.grid[position] == '-';
    }

    placeSymbol(position, symbol)
    {
        this.grid[position] = symbol;
    }

    winCheck()
    {
        return this.winningConditions.some((element) => {
            return ((this.grid[element[0]] == this.grid[element[1]]) && (this.grid[element[1]] == this.grid[element[2]]) && (this.grid[element[0]] != '-'));
        },this.grid);
    }

    isBoardFilled()
    {
        return !this.grid.includes('-');
    }

    printBoard()
    {
        console.log(this.grid.slice(0,3));
        console.log(this.grid.slice(3,6));
        console.log(this.grid.slice(6,9));
    }
}

module.exports = Board;