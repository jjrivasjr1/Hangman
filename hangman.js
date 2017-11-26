var lettersInSecretWord = [];
var numBlanks = 0;

var winCounter = 0;
var lossCounter =0;
var blanksAndSuccesses = [];
var guessedLetters = [];
var word;


 	//inform potential players to press the start button if they would like to play a game of Hangman
 	function start(){

		//players have 9 attempts to guess the letters in the secret word
		var numGuesses = 9;
		//next have the computer choose a secret word randomly from a word list
		var wordList = ["Philip J Fry", "Bender Rodriguez", "Lela Taranga", "Amy Wong", " Zoidberg", "Nibbler",
		 "Hermes", "Professor Farnsworth"];
		// once the computer has selected the secret word have the secret word stored in the
		// secret word variable

		 word = wordList[Math.floor(Math.random() * wordList.length)];
		// however instead of the letters of the secret word being displayed,
		// each individual letter will be hidden behind underscores
		// the letters will be revealed when input has matched any of the letters in the
		// console.log(secret word);
		lettersInSecretWord = word.split(""); 

		numBlanks = lettersInSecretWord.length;

		//console.log(secretWord);

		blanksAndSuccesses = [];

		guessedLetters = [];

		for (var i = 0; i < numBlanks; i++) {
			blanksAndSuccesses.push("_");
		}

		//console.log(blanksAndSuccesses);

		//next have the secret word displayed on the screen

		document.getElementById("secret-word").innerHTML = blanksAndSuccesses.join(" ");

		document.getElementById("guesses-left").innerHTML = numGuesses;

		document.getElementById("win-counter").innerHTML = winCounter;

		document.getElementById("loss-counter").innerHTML = lossCounter;

		//next have players attempt to guess the letters that unveil  the secret word



var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var outputElement = document.getElementById('guessed-letters');
var guessedLetters = []; // stores the letters the user guessed

document.addEventListener('keyup', function (event) {
  var key = event.key.toLowerCase();
  if (alphabet.indexOf(key) !== -1) {
    // the key is a letter in the alphabet
    if (guessedLetters.indexOf(key) === -1) {
      // the key has not been guessed
      guessedLetters.push(key);
      var string = guessedLetters.join(''); // join the letters together to one single string
      outputElement.textContent = string;
    }
  }
});

// const words = ['John', 'Jacob', 'Jingleheimersmith']

// function chooseWord(array) {
  // return array[Math.floor(Math.random() * array.length)].toUpperCase()
// }

function fillInWordWithLetter(key, word) {
  return word.toLowerCase().split('').map(l =>  {
    if (key === word[i]) {
      return key.toUpperCase()
    }
    return '_'
  }).join(' ')
}

// fillInWordWithLetter('j', chooseWord(words))
} 
// function letterCheck (userGuess) {
	// document.onkeyup = function(event) {
	//if player inputs does NOT want to play then proceed to exit game
	// var userGuess = event.key;
	// userGuess = letters;
	// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
	// 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	// if(userGuess === letters){
	// for(i = 0; i < array.length; i++ )
	// {
		// if(event.key == secretWord[i])
		// {
			//exit the loop or call another method
			// blanksAndSuccess.splice(2, userGuess);
		// }
	// }	
	// } else {
		// document.write("Please enter a valid input");
	 // }
	// }
	
	// }	
// if(userGuess === letters[]) {
// }		// if(userGuess !== secretWord[])

	//the incorrect inputs	 will be stored in an array

	// wrongGuesses.push("userGuess");

	//for every failed attempt; one of the 9 attempts will be removed

	// numGuesses--;

	//for every letter match; a letter will be revealed
	
		// var message = console.log(" please choose a single letter.");
		// document.getElementById("warning").innerHTML = message;
	// }


	//every incorrect attempt will be displayed in the incorrect guess section

	//if player uses up all attempts and does NOT guess the correct letters
	//they lose

	//However, if player guesses all the letters in the secret word before they run out 
	//of attempts they get a point.


	




