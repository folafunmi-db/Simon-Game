//write and and make a note to refactor this code
//freeCodeCamp Simon Game used to learn js

let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn; //who's turn it is to play
let intervalId;
let strict = false; //for if the check mark has been checked
let noise = true;
let on = false; //turning the game on or off but is initially off
let win; //if the player has won the game

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

//stating an arrow function in js
strictButton.addEventListener("click", (event) => {
  if (strictButton.checked == true) {
    strict = ture;
  } else {
    strict = false;
  }
})

onButton.addEventListener('click', (event) => {
	if (onButton.checked == true) {
		on = true;
		turnCounter.innerHTML = "-";
	} else {
		on = false;
		turnCounter.innerHTML = "";
	}
})