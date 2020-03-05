class Player
{
    constructor(symbol, playerNo)
    {
        this.symbol = symbol;
        this.positions = [];
        this.playerNo = playerNo;
    }

    getPositions()
    {
        return this.positions;
    }

    input()
    {
        //code for reading position
        let position = 0;
        return position;
    }
}

p =new Player();
console.log(p.age);

module.exports = Player;