const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');

const Battleship = require('./index')
//import Battleship from './index.js'



//make tests
test('Test battleship parameters.',()=>{
    const obj = new Battleship('name',10);
    expect(obj.name).toBe('name');
    expect(obj.length).toBe(10);
});