var player1Symbol, player2Symbol;
var ticTacToe;

for(let position = 0; position < 9 ; position++)
{
    document.getElementById(position).addEventListener("click", game);
}

function validate(id){
    let symbol = document.getElementById(id);
    player1Symbol = document.getElementById("player1Symbol").value;
    player2Symbol = document.getElementById("player2Symbol").value
    if((player1Symbol == player2Symbol) || (['',' '].includes(symbol.value))){
        symbol.value = '';
        symbol.focus();
        document.getElementById("message").innerHTML = "Enter valid symbols";
    }
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

function start()
{
    if(!areSymbolsValid())
        return;
    disableFields();
    ticTacToe = new TicTacToe(player1Symbol, player2Symbol);
    document.getElementById("board").style.display = "block";
    document.getElementById("playerDetails").innerHTML = "Current player number:1 symbol:"+player1Symbol;
}

function disableFields()
{
    document.getElementById("message").style.display = 'none';
    document.getElementById("player1Symbol").disabled = true;
    document.getElementById("player2Symbol").disabled = true;
}

function game()
{
    let position = event.target.id;
    if(document.getElementById(position).innerHTML != ' ')
        return;
    ticTacToe.play(position);
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

function displayRules()
{
    document.getElementById("list").style.display = "block";
}

function closeRules()
{
    document.getElementById("list").style.display = "none";
}