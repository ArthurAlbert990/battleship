console.log('index.js working');


export class Battleship{
    constructor(id = null,length,x,y,pos){
        this.id = id;
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        this.x = x;
        this.y = y;
        this.pos = pos;
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
    constructor(){
        this.fullBoard = [];
    }

    placeShip(length,x,y){
        let ship = new Battleship (null,length,x,y,'horizontal');
        this.fullBoard.push(ship);
        return ship
    }
    receiveAttack(x,y){
        //receives the hit coordinates
        //sends the hit function to the correct ship
        // or
        // records the coordinates of a missed shot
    }

    //keeps tracks of missed attacks.
    missedAttacks(x,y){
        let missCount = 0;
    }

    //if any ship in fullBoard has sunk=true, return false
    //there is at least one alive
    // if not, it will return true after the loop.
    
    isEveryoneDead(){
        for(let ship of fullBoard){
            if (ship['sunk'] != true){
                return false
            }
        }
        return true;
    }

}

//module.exports=Battleship;
//CODE THE TESTS FIRST !!!!:
// CODE THE TESTS FIRST!!!!:


//let newShip = new Gameboard(10,15);
let boardPlayerA = new Gameboard;
let ship1 = boardPlayerA.placeShip(5,10,15)
console.log(ship1);

// let ship = new Battleship('ship_1',10);
// console.log(ship);
// ship.hit()
// ship.hit()
// console.log(ship);


//08:35 às 09:10.
//09:38 às 10:00.
//08:55 às 09:48.
//18:43 às 19:15.


// =========== ONDE PAREI ===============
//Gameboard:
// falta receiveAttack e missedAttacks



// ---- later:
//SHOULD BATTLESHIP BE A FUNCTION???
//setup do testes, lembrar, tdd first.
//jest não está funcionado.