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
        position -= 1;
        return position >= 0 && position < 9 && this.grid[position] == '-';
    }

    placeSymbol(position, symbol)
    {
        this.grid[position - 1] = symbol;
    }

    winCheck(positions)
    {

        let index = 0, win;
        do{
            win = this.isConditionPresent(positions, this.winningConditions[index]);
            index++;
        }
        while(win == false && index < this.winningConditions.length);
        return win ;
    }

    isConditionPresent(positions, condition)
    {
        let count = 0;
        for(let index = 0; index < condition.length; index++)
        {
            if(positions.includes(condition[index])){
                 count++;
            }
        }
        return count == condition.length;
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