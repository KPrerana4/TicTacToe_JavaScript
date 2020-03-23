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
        let sentence = "Current player:" + (playerNo+1) + " symbol:"+symbol;
        document.getElementById("playerDetails").innerHTML = sentence;
    }

    printWinner(winner)
    {
        if(winner == "tie")
             this.changeResultMessage("tie", "No one Won");
        else if((winner == '1') || (winner == '0'))
        {
           let playerId = "player"+winner;
           this.changeResultMessage(playerId, "player "+ (winner+1) + " has Won");
        }
    }

    changeResultMessage(id, message)
    {
        let count = parseInt(document.getElementById(id).innerHTML);
        count += 1;
        document.getElementById(id).innerHTML  = count;
        document.getElementById("result").innerHTML = message;
    }
}

