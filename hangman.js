var lettersInSecretWord = [];
var numBlanks = 0;
var numGuesses = 9;
var winCounter = 0;
var lossCounter =0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var secretWord;

var wordList = ["Fry", "Bender", "Lela", "Amy", " Zoidberg", "Nibbler",
 "Hermes", "Professor Farnsworth"];

//ask potential players if they would like to play a game of Hangman

//if player inputs does NOT want to play then proceed to exit game

//else if player AGREES to play 

//proceed with the rules for hangman

//players have 9 attempts to guess the letters in the secret word

//next have the computer choose a secret word randomly from a word list

// once the computer has selected the secret word have the secret word stored in the
// secret word variable

 secretWord = wordList[Math.floor(Math.random() * wordList.length)];

lettersInSecretWord = secretWord.split(""); 

numBlanks = lettersInSecretWord.length;

//console.log(secretWord);

blanksAndSuccesses = [];

wrongGuesses = [];

for (var i = 0; i < numBlanks; i++) {
	blanksAndSuccesses.push("_");
}

//console.log(blanksAndSuccesses);
document.getElementById("secret-word").innerHTML = blanksAndSuccesses;

document.getElementById("guesses-left").innerHTML = numGuesses;

document.getElementById("win-counter").innerHTML = winCounter;

document.getElementById("loss-counter").innerHTML = lossCounter;

//next have the secret word displayed on the screen

// however instead of the letters of the secret word being displayed,
// each individual letter will be hidden behind underscores
// the letters will be revealed when input has matched any of the letters in the
//secret word

//next have players attempt to guess the letters that unveil  the secret word

//for every letter match; a letter will be revealed

//for every failed attempt; one of the 9 attempts will be removed

//the incorrect inputs	 will be stored in an array

//every incorrect attempt will be displayed in the incorrect guess section

//if player uses up all attempts and does NOT guess the correct letters
//they lose

//However, if player guesses all the letters in the secret word before they run out 
//of attempts they get a point.




