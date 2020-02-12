//write and and make a note to refactor this code 
//freeCodeCamp Simon Game used to learn js

let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn; //who's turn it is to play
let intervalId;
let strict; //for if the check mark has been checked
let noise = true;
let on = false; //turning the game on or off but is initially off
let win; //if the player has won the game