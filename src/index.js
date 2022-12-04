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
        console.log('HIT!');
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
            if(ship['pos']=='horizontal'){
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
        console.log('attack: MISS');

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

//
// PAREI AQUI, DESENVOLVENDO PLAYER
// type pode ser 'user' ou 'machine'
//
export class Player{
    constructor(name,type){
    this.name = name;
    this.type = type;
    this.playerBoard = null;
    this.enemyBoard = null;
    }

    setEnemyBoard(gameboard){
        this.enemyBoard = gameboard;
        console.log(`Enemy board set as: ${gameboard}`);
        return;
    }

    attack(x=0,y=0){
        if(this.type=='user'){
            this.enemyBoard.receiveAttack(x,y);
        }
        else{
            computerAttack();
        }

        return;
    }
}

export function computerAttack(){
    // em desenvolvimento, vez do pc, gerar coordenadas para ataque.
}


//module.exports=Battleship;
//CODE THE TESTS FIRST !!!!:
// CODE THE TESTS FIRST!!!!:


let playerA = new Player('Arthur','user');
let playerB = new Player('PC','machine');
let boardPlayerB = new Gameboard;
playerA.setEnemyBoard(boardPlayerB)
let ship1 = boardPlayerB.placeShip(5,10,15,'horizontal');
playerA.attack(12,4)
console.log(ship1);


//29/11
//09:13 às 09:18.
//19:15 19:55.

//03/12
//10:50 às 11:10
//20:50 às 21:10



// =========== ONDE PAREI ===============
// começar: (ver instruções na página do odin)
//3. Creating player functions

// ========== OBSERVAÇÕES: ==============
// Função de receiveAttack ainda não está completa
// falta acabar lógica, adicionar suporte ao eixo Y.

// ---- later:
//setup do testes, lembrar, tdd first.
//jest não testa todas as funções de uma vez só.