class Player
{
    constructor(symbol, playerNo)
    {
        this.#symbol = symbol;
        this.#positions = [];
        this.#playerNo = playerNo;
    }

    getSymbol()
    {
        return this.#symbol;
    }

    getPositions()
    {
        return this.#positions;
    }

    input()
    {
        //code for reading position
        let position = 0;
        return position;
    }

    addPosition(position)
    {
        let length = this.#positions.length;
        this.#positions[length - 1] = position;
    }
}

module.exports = Player;