console.log('index.js working');


export class Battleship{
    constructor(id = null,length){
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
        if(this.length > this.hits){
            this.sunk = true;
        }
        return this.sunk;
    }
}

//Able to place ships at an x,y coord calling 
//the Battleship factory.
//maybe an array holding every ship?
export class Gameboard{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.board = {
            'coords':{x,y},
        };
    }

    placeShip(length,x=this.x,y=this.y){
        let ship = new Battleship (null,length);
        this.board['coords']={x,y};
        this.board['ship']=ship;
    }
    receiveAttack(x,y){
        //receives the hit coordinates
        //sends the hit function to the correct ship
        // or
        // records the coordinates of a missed shot
    }

    //keeps tracks of missed attacks.
    missedAttacks(x,y){

    }

}

//module.exports=Battleship;
//CODE THE TESTS FIRST !!!!:
// CODE THE TESTS FIRST!!!!:


let newShip = new Gameboard(10,15);
newShip.placeShip(5)
console.log(newShip);

// let ship = new Battleship('ship_1',10);
// console.log(ship);
// ship.hit()
// ship.hit()
// console.log(ship);


//08:35 às 09:10.
//09:38 às 10:00.
//08:55 às 09:48.


// =========== ONDE PAREI ===============
//Create Gameboard factory.
// gameboard  está desorganizado mas funciona, ler enunciado
// e comparar com o código.
// dar um run-> node index.js


// ---- later:
//SHOULD BATTLESHIP BE A FUNCTION???
//setup do testes, lembrar, tdd first.
//jest não está funcionado.