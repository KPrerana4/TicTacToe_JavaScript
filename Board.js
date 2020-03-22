class Board
{
    constructor(winningConditions)
    {
        this.winningConditions = winningConditions;
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
        return !this.getGrid().includes(' ');
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