//Object hangmanGame
var hangmanGame={
	
	//Number of wins
	wins: 0,
	//Number of loses
	loses: 0,
	//Number of guesses left before you lose
	guessLeft: 6,
	//this word is then pass into an array
	currentWord: [],
	//Holds the corrects keys you pressed
	guessing: [],
	//Holds current key 
	keyPressed: "",
	//Array with possible words
	wordsArr: ["patience","mahjong","chess","backgammon","sudok","blackjack", "poker","pyramid","draughts","minecraft",
				"destiny","skyrim","gta","madden nfl", "monopoly","overwatch","dota","mario + rabbids", "splatoon"
	],
	//Array with incorrect keys
	incorrectArr: [],
	//Function to increase wins
	increaseWins: function(){
		this.wins++;
	},
	//Function to increase loses
	increaseLoses: function(){
		this.loses++;
	},
	//Function to decrease the number of guesses left
	decreaseGuessLeft: function(){
		this.guessLeft--;
		if(this.guessLeft === 0){
			this.resetGuess();
			this.increaseLoses();
			this.pickWord();
		}
	},
	//Function to reset guesses
	resetGuess: function(){
		this.guessLeft = 6;
	},
	//Function to pick a new word
	pickWord: function(){
		console.log("testingtestingtestingtestingtestingtestingtesting");
		//Var to hold a temporary word
		var tempWord = this.wordsArr[Math.floor(Math.random() * this.wordsArr.length)];
		//Clear guessing array
		this.guessing = [""];
		//Clear currentWord
		this.currentWord = [""];
		//clear incorrectArray
		this.incorrectArr = [""];
		//Add the word to an array
		for(var i = 0; i < tempWord.length; i++){
			//Guessing array
			this.currentWord.push(tempWord.charAt(i));
			//Current
			if (!tempWord.charAt(i) === " "){
				this.guessing.push("_");
			}else{
				this.guessing.push(" ");
			}
		}
	},
	//Funtion to check if the letter is in the world
	checkLetter: function(){
		var correct = false;
		//Loops through array and check if the key letter is in the word
		for (var i = 0; i < this.currentWord.length; i++) {
			if(this.currentWord[i] === this.keyPressed){
				this.guessing[i] = this.keyPressed;
				correct = true;
			}
		}
		//if letter was incorrect added it to the incorrect array
		if(!correct){
			this.incorrectArr.push(this.keyPressed);
			this.decreaseGuessLeft();
		}		
	},
	incorrectAnswer: function(){
		for(var i = 0; i < this.incorrectArr.length; i++){
			if(this.incorrectArr[i] === this.keyPressed){
				alert("You already used this letter.");
				return false;
			}
		}
		return true;
	},
	//testing function
	testFunction: function(){
		console.log("wins: " + this.wins);
		console.log("loses: " + this.loses);
		console.log("guesses left: " + this.guessLeft);
		console.log("current word: " + this.currentWord);
		console.log("guessing word: " + this.guessing);
	},
	score: function() {
	    for(var i = this.currentWord.length; i--;) {
	        if(this.currentWord[i] !== this.guessing[i]){
	           	console.log("Not the same yet!")
	            return false;
	        }
	    }
	    console.log("YOU GUESSED IT!");
    	return true;
	}
};

//Pinks a new word when you load the page
hangmanGame.pickWord();
//Testing function
hangmanGame.testFunction();

document.onkeyup = function(){

 	//Store the key pressed
 	hangmanGame.keyPressed = event.key;
 	//Check if key was already incorrect
 	if(hangmanGame.incorrectAnswer()){
 		//Calls checkLetter function
 		hangmanGame.checkLetter();
 	}
 	//Check if you guess the word
 	if(hangmanGame.score()){
 		//Calls the increaseWins function
 		hangmanGame.increaseWins();
 		hangmanGame.pickWord();
 	}
 	//testing function
 	hangmanGame.testFunction();

}