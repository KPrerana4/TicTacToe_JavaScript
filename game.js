var player1Symbol, player2Symbol;
var ticTacToe;

for(let position = 0; position < 9 ; position++)
{
    document.getElementById(position).addEventListener("click", game);
}

function game()
{
    let position = event.target.id;
    if(document.getElementById(position).innerHTML != ' ')
        return;
    ticTacToe.start(position);
}

function start()
{
    if(!areSymbolsValid())
        return;
    disableFields();
    ticTacToe = new TicTacToe(player1Symbol, player2Symbol);
    document.getElementById("board").style.display = "block";
    document.getElementById("currentPlayerSymbol").innerHTML = "Current player symbol:"+player1Symbol;
}

function areSymbolsValid()
{
    player1Symbol = document.getElementById("player1Symbol").value;
    player2Symbol = document.getElementById("player2Symbol").value;
    if(player1Symbol == '' || player2Symbol == ''){
        document.getElementById("message").innerHTML = "Enter valid symbols";
        return false;
    }
    return true;
}

function disableFields()
{
    document.getElementById("message").style.display = 'none';
    document.getElementById("player1Symbol").disabled = true;
    document.getElementById("player2Symbol").disabled = true;
}

function reset()
{
    for(let position = 0; position < 9; position++)
    {
        document.getElementById(position).innerHTML = " ";
    }
    ticTacToe = new TicTacToe(player1Symbol, player2Symbol);
    document.getElementById("result").innerHTML = "";
}

function rules()
{
    document.getElementById("list").style.display = "block";
}

function closeRules()
{
    document.getElementById("list").style.display = "none";
}

function getValidSymbol(id)
{
    let symbolReference = document.getElementById(id);
    if(document.getElementById("player2Symbol").value == document.getElementById("player1Symbol").value)
    {
        symbolReference.value = '';
        symbolReference.focus();
    }
    else if(['',' '].includes(symbolReference.value))
    {
        document.getElementById("message").innerHTML = "Enter valid symbols";
        symbolReference.focus();
    }
}