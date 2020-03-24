class Player
{
    constructor(symbol, playerNo)
    {
        this.symbol = symbol;
        this.playerNo = playerNo;
        this.score = 0;
    }

    getSymbol()
    {
        return this.symbol;
    }
}