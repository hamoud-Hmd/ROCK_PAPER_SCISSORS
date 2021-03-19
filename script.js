const startGameBtn = document.getElementById('start-game-btn');
const gameStatus = document.querySelector('.container > h1');
const ROCK = document.getElementById('rock');
const PAPER = document.getElementById('paper');
const SCISSORS = document.getElementById('scissors');
const PLAYER = document.querySelector('.player h3');
const COMPUTER = document.querySelector('.computer h3');
const OUTPUT_WINNER = document.querySelector('.output-winner');
const DRAW = 'There is a draw';
const PLAYER_WON = 'You won';
const COMPUTER_WON = 'The computer won';
const PLAYER_SCORE = document.querySelector('.player h2');
const COMPUTER_SCORE = document.querySelector('.computer h2');
const boxes = document.querySelectorAll('.box');
let computerScoreCounter = Number(COMPUTER_SCORE.textContent);
let playerScoreCouneter = Number(PLAYER_SCORE.textContent);
let gameIsRuning = false;
let gameOver = false;

const getComputerChoice = () => {
	const computerChoice = Math.random();
	if (computerChoice < 0.33) {
		return ROCK.id;
	} else if (computerChoice < 0.66) {
		return PAPER.id;
	} else {
		return SCISSORS.id;
	}
};

const getPlayerChoice = pChoice => {
	const cChoice = getComputerChoice();

	for (const box of boxes) {
		box.classList.remove('animate');
	}

	let getWinner =
		cChoice === pChoice
			? DRAW
			: (cChoice == ROCK.id && pChoice == PAPER.id) ||
			  (cChoice == SCISSORS.id && pChoice == ROCK.id) ||
			  (cChoice == PAPER.id && pChoice == SCISSORS.id)
			? PLAYER_WON
			: COMPUTER_WON;

	if (gameIsRuning) {
		SCISSORS.style.pointerEvents = 'none';
		PAPER.style.pointerEvents = 'none';
		ROCK.style.pointerEvents = 'none';
		startGameBtn.textContent = 'Try again!';
	}

	if (getWinner === COMPUTER_WON) {
		computerScoreCounter++;
		console.log('Computer score: ' + computerScoreCounter);
	} else if (getWinner === PLAYER_WON) {
		playerScoreCouneter++;
		console.log('Your score: ' + playerScoreCouneter);
	}

	if (computerScoreCounter >= 5) {
		gameStatus.textContent = 'You lost the game try again!';
		gameIsRuning = true;
		gameOver = true;

		init();
	}

	if (playerScoreCouneter >= 5) {
		gameStatus.textContent = 'You Won the game';
		gameIsRuning = true;
		gameOver = true;
		init();
	}

	OUTPUT_WINNER.textContent = getWinner;
	COMPUTER.textContent = cChoice;
	PLAYER.textContent = pChoice;
	PLAYER_SCORE.textContent = playerScoreCouneter;
	COMPUTER_SCORE.textContent = computerScoreCounter;
};

SCISSORS.addEventListener('click', getPlayerChoice.bind(null, SCISSORS.id));
ROCK.addEventListener('click', getPlayerChoice.bind(null, ROCK.id));
PAPER.addEventListener('click', getPlayerChoice.bind(null, PAPER.id));

startGameBtn.addEventListener('click', () => {
	if (gameOver) {
		gameIsRuning = false;
		computerScoreCounter = 0;
		playerScoreCouneter = 0;
		init();
	}
	if (gameIsRuning) {
		console.log('YOu are still playing motherfucker');
		return;
	}

	for (const box of boxes) {
		box.classList.add('animate');
	}

	SCISSORS.style.pointerEvents = 'auto';
	PAPER.style.pointerEvents = 'auto';
	ROCK.style.pointerEvents = 'auto';
	startGameBtn.textContent = 'Play';
	computerScoreCounter = 0;
	playerScoreCouneter = 0;
	gameStatus.textContent = 'Game is running ....';
});

const init = () => {
	SCISSORS.style.pointerEvents = 'none';
	PAPER.style.pointerEvents = 'none';
	ROCK.style.pointerEvents = 'none';
};

init();

//Not related to the game
// const showResult = (message, result) => {
// alert("The result "+ message + result);
// };

// const calculator = (resultHandler,operation, ...numbers) => {

// 	const validateNumber = (number) => {
// 		return isNaN(number) ? 0: number;
// 	};

// 	let sum = 0;
// 	for(const num of numbers){ // this called rest parameters
// 		if(operation === "ADD"){
// 			sum += validateNumber(num);
// 		}else if(operation === "SUBTRACT"){
// 			sum -= validateNumber(num);
// 		}else{
// 			sum /= validateNumber(num);
// 		}

// 	}
// 	resultHandler(sum);
// };

// calculator(showResult.bind(this, "after adding all the numbers is "), "ADD", 1,3,5,2,5,6,'dgds', 32);
// calculator(showResult.bind(this, "after substracting all the numbers is "), "SUBTRACT", 1,3,5,2,5,6,'dgds', 32);
// calculator(showResult.bind(this, "after multiplying all the numbers is "), "m", 1,3,5,2,5,6,'dgds', 32);

// const subtracDown = function() {
// 	let sum = 0;

// 	for(const num of arguments){ //don't use this it is an old way of achieving this aproach.
// 		sum -= num;
// 	}

// 	return sum;
// };
