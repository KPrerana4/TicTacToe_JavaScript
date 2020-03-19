class Board
{

    constructor(winningConditions)
    {
        this.winningConditions = winningConditions;
    }

    placeSymbol(position, symbol)
    {
        document.getElementById(position).innerHTML = symbol;
    }

    winCheck()
    {
        let grid = this.getGrid();
        return this.winningConditions.some((element) => {
            return ((grid[element[0]] == grid[element[1]]) && (grid[element[1]] == grid[element[2]]) && (grid[element[0]] != ' '));
        },grid);
    }

    isBoardFilled()
    {
        let grid = this.getGrid();
        return !grid.includes(' ');
    }

    getGrid()
    {
        let grid = [];
        for(let position = 0; position < 9 ;position++)
        {
            grid[position] = document.getElementById(position).innerHTML;
        }
        return grid;
    }
}