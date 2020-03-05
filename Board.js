class Board
{
    Board(winningConditions)
    {
        this.winningConditions = winningConditions;
        this.grid = new Array(9);
    }

    validatePosition(position)
    {
        position -= 1;
        return position >= 0 && position < 9 && this.grid[position] == undefined;
    }

    placeSymbol(position, symbol)
    {
        this.grid[position - 1] = letter;
    }

    winCheck(positions)
    {

        let index = 0, win;
        do{
            win = isConditionSatisfied(position, winningConditions[index]);
                index++;
        }
        while(win == false && index < winningConditions.length);
        return win || !isBoardFilled();
    }

    isConditionpresent(positions, condition)
    {
        let count = 0;
        for(let index = 0; index < condition.length; index++)
        {
            if(positions.includes(condition[index]))
                 count++;
        }
        if(count == condition.length)
            return true;
    }

    isBoardFilled()
    {
        return !this.grid.includes(undefined);
    }
}

module.exports = Board;