var count = 0;
var win = false;
function game(buttonId)
{
    if(win == true)
       return;
    if(setSymbol(buttonId)){
        win = winCheck(getGrid());
        //alert(win);
        printWinner();
    }
}

function setSymbol(buttonId)
{
    let button = document.getElementById(buttonId);
    if(button.innerHTML == ' '){
        button.innerHTML = (count % 2 == 0) ? 'X' : 'O';
        count++;
        return true
    }
    return false;
}

function winCheck(grid)
{
    let winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return winningConditions.some((element) => {
        return ((grid[element[0]] == grid[element[1]]) && (grid[element[1]] == grid[element[2]]) && (grid[element[0]] != ' '));
    },grid);
}

function getGrid()
{
    let grid = [];
    for(let index = 0; index < 9; index++)
        grid[index] = document.getElementById(index).innerHTML;
    return grid;
}

function isBoardFilled(grid)
{
    return !grid.includes(' ');
}

function printWinner()
{
    if(win)
        document.getElementById("result").innerHTML = "You Won";
    else if(isBoardFilled(getGrid()))
        document.getElementById("result").innerHTML = "No one Won";
}