class Player
{
    constructor(symbol, playerNo)
    {
        this.symbol = symbol;
        this.playerNo = playerNo;
        this.positions = [];
    }

    getSymbol()
    {
        return this.symbol;
    }

    getPositions()
    {
        return this.positions;
    }

    addPosition(position)
    {
        let length = this.positions.length;
        this.positions[length] = position;
    }
}

module.exports = Player;