// import { SingleEntryPlugin } from "webpack";

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
//orientation = 'horizontal' or 'vertical
export class Gameboard{
    constructor(){
        this.fullBoard = [];
    }
    placeShip(length,x,y,orientation){
        let ship = new Battleship (null,length,x,y,orientation);
        this.fullBoard.push(ship);
        return ship
    }
    //receives the attack coordinates
    receiveAttack(x,y){
        console.log(`Attack received on, x:${x},y:${y}`);
        for(let ship of this.fullBoard){
            if(ship['orientation']=='horizontal'){
                let startX = ship.x;
                let endX = ship['length']+ship.x;
                if(x>=startX && x<=endX){
                    return ship.hit();
                }else{
                    return this.missedAttacks(x,y);
                }
            }else{
                let startY = ship.y;
                let endY = ship['length']+ship.y;
                if(y>=startY && y<=endY){
                    return ship.hit();
                }else{
                    return this.missedAttacks(x,y);
                }
            }          
        }
    }

    //keeps tracks of missed attacks.
    missedAttacks(x,y){
        let missList=[];
        missList.push({x,y});

        return missList;
    }

    //if any ship in fullBoard has sunk=true, return false
    //there is at least one alive
    // if not, it will return true after the loop.
    
    isEveryoneDead(){
        for(let ship of this.fullBoard){
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
let ship1 = boardPlayerA.placeShip(5,10,15,'horizontal');
console.log(ship1);
let attack = boardPlayerA.receiveAttack(12,4);
console.log(attack);
console.log(ship1);


//08:35 às 09:10.
//09:38 às 10:00.
//08:55 às 09:48.
//18:43 às 19:15.
//09:13 às 09:18.
//19:15 19:51.


// =========== ONDE PAREI ===============
// começar: (ver instruções na página do odin)
//3. Create Player



// ---- later:
//setup do testes, lembrar, tdd first.
//jest não testa todas as funções de uma vez só.