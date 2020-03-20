class View
{
    placeSymbol(position, symbol, playerNo)
    {
        document.getElementById(position).innerHTML = symbol;
        let symbolColor = playerNo == 0 ? "red" : "green";
        document.getElementById(position).style.color = symbolColor;
    }

    printCurrentPlayerSymbol(symbol)
    {
        document.getElementById("currentPlayerSymbol").innerHTML = "Current player symbol:"+symbol;
    }

    printWinner(sentence)
    {
        document.getElementById("result").innerHTML = sentence;
    }
}