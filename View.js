class View
{
    placeSymbol(position, symbol, playerNo)
    {
        document.getElementById(position).innerHTML = symbol;
        let symbolColor = playerNo == 0 ? "red" : "green";
        document.getElementById(position).style.color = symbolColor;
    }

    displayCurrentPlayerDetails(playerNo, symbol)
    {
        let sentence = "Current player number :" + (playerNo+1) + " symbol:"+symbol;
        document.getElementById("playerDetails").innerHTML = sentence;
    }

    printWinner(sentence)
    {
        document.getElementById("result").innerHTML = sentence;
    }
}