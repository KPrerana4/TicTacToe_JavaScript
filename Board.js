class Board
{
    constructor(winningConditions)
    {
        this.winningConditions = winningConditions;
    }

    placeSymbol(position, symbol, playerNo)
    {
        document.getElementById(position).innerHTML = symbol;
        let symbolColor = playerNo == 0 ? "red" : "green";
        document.getElementById(position).style.color = symbolColor;
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