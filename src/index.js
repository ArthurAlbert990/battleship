console.log('index.js working');


export default class Battleship{
    constructor(id,length){
        this.id = id;
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        this.hits++;
        return this.hits;
    }
    isSunk(){
        return this.sunk;
    }
}

//module.exports=Battleship;
//CODE THE TESTS FIRST !!!!:
// CODE THE TESTS FIRST!!!!:

// let ship = new Battleship('ship_1',10);
// console.log(ship);
// ship.hit()
// ship.hit()
// console.log(ship);


//08:35 às 09:10.
//09:38 às 10:00.


// =========== ONDE PAREI ===============
//SHOULD BATTLESHIP BE A FUNCTION???
//setup do testes, lembrar, tdd first.
//jest não está funcionado.