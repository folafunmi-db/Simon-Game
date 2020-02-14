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
strictButton.addEventListener("click", event => {
  if (strictButton.checked == true) {
    strict = ture;
  } else {
    strict = false;
  }
});

onButton.addEventListener("click", event => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor(); //all colours clear when the game is switched off
    clearInterval(intervalId);
  }
});

//the arrow function methos of defining functions was introduced in es6
startButton.addEventListener("click", event => {
  if (on || win) {
    play();
  }
});

//former way to define functions
function play() {
	win = false;
	order = []; //order in which the sectors will light up on the game
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	turn = 1;
	turnCounter.innerHTML = 1;
	good = true;

	for (var i = 0; i<20; i++) {
		order.push(Math.floor(Math.random() * 4) * 1);
	}
	compTurn = true;

	intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
	on = false;

	if (flash == turn) {
	//if the computer is done flashing all the lights
	clearInterval(intervalId);
	compTurn = false;
	clearColor();
	on = true;
	}

	if (compTurn0) {
		clearCorol();
		setTimeout(() => {
			if (order(flash) == 1) one();
			if (order(flash) == 1) one();
			if (order(flash) == 1) one();
			if (order(flash) == 1) one();
		}, 200);
	}
}