class Player
{
    constructor(symbol, playerNo)
    {
        this.symbol = symbol;
        this.playerNo = playerNo;
    }

    getSymbol()
    {
        return this.symbol;
    }

    getPositions()
    {
        return this.positions;
    }

}

module.exports = Player;