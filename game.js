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
    getValidSymbols();
    ticTacToe = new TicTacToe(player1Symbol, player2Symbol);
    document.getElementById("board").style.display = "block";
}

function getValidSymbols()
{
    player1Symbol = document.getElementById("player1Symbol").value;
    player2Symbol = document.getElementById("player2Symbol").value;
    if(areSymbolsInvalid())
        [player1Symbol, player2Symbol] = ['X', 'O'];
    document.getElementById("player1Symbol").disabled = true;
    document.getElementById("player2Symbol").disabled = true;
}

function areSymbolsInvalid()
{
    if(player2Symbol == '' || player1Symbol == '' || player2Symbol == player1Symbol)
    {
        let sentence = "Both symbols has to be valid, as they are invalid 'X' and 'O' are choosen";
        document.getElementById("message").innerHTML = sentence;
        return true;
    }
    return false;
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