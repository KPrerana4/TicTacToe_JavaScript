var player1Symbol, player2Symbol;
var main;

for(let position = 0; position < 9 ; position++)
{
    document.getElementById(position).addEventListener("click", game);
}

function validate(id){
    let symbol = document.getElementById(id);
    player1Symbol = document.getElementById("player1Symbol").value;
    player2Symbol = document.getElementById("player2Symbol").value;
    if((player1Symbol == player2Symbol) || (['',' '].includes(symbol.value)) || symbol.value.length > 4){
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
    main = new Main();
    main.start(player1Symbol, player2Symbol);
    document.getElementById("board").style.display = "block";
    document.getElementById("playerDetails").innerHTML = "Current player:1 symbol:"+player1Symbol;
}

function disableFields()
{
    document.getElementById("message").style.display = 'none';
    document.getElementById("player1Symbol").disabled = true;
    document.getElementById("player2Symbol").disabled = true;
    document.getElementById("start").disabled = "true";
}

function game()
{
    let position = event.target.id;
    if(document.getElementById(position).innerHTML != ' ')
        return;
    main.play(position);
}

function reset()
{
    for(let position = 0; position < 9; position++)
    {
        document.getElementById(position).innerHTML = " ";
    }
    main.start(player1Symbol, player2Symbol);
    document.getElementById("playerDetails").innerHTML = "Current player:1 symbol:"+player1Symbol;
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

function changeMode()
{
    if(document.getElementById("mode").innerHTML == "<b>Dark mode</b>"){
        modes("rgb(80,80,80)", "Normal mode", "white");
    }
    else{
        modes("white", "Dark mode", "blue");
    }
}

function modes(backgroundColor, mode, fontColor)
{
    document.getElementsByTagName("body")[0].style.backgroundColor = backgroundColor;
    document.getElementById("mode").innerHTML = "<b>" + mode + "</b>";
    for(let element of document.getElementsByTagName("p"))
        element.style.color = fontColor;
}