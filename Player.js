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

    input()
    {
        let sentence = "Player " + (this.playerNo+1) + " position:";
        let position = parseInt(require('readline-sync').question(sentence));
        return position;
    }

    addPosition(position)
    {
        let length = this.positions.length;
        this.positions[length] = position;
    }
}

module.exports = Player;