class Board
{
    constructor(winningConditions)
    {
        this.winningConditions = winningConditions;
        this.grid = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    }

    winCheck()
    {
        return this.winningConditions.some((element) => {
            return ((this.grid[element[0]] == this.grid[element[1]]) && (this.grid[element[1]] == this.grid[element[2]]) && (this.grid[element[0]] != ' '));
        },this.grid);
    }

    isBoardFilled()
    {
        return !this.grid.includes(' ');
    }

    updateGrid(position,symbol)
    {
        this.grid[position] = symbol;
    }
}