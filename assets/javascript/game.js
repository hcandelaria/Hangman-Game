//Object hangmanGame
var hangmanGame={
	
	//Number of wins
	wins: 0,
	//Number of loses
	loses: 0,
	//Number of guesses left before you lose
	guessLeft: 12,
	//this word is then pass into an array
	currentWord: [],
	//Holds the corrects keys you pressed
	guessing: [],
	//Holds current key 
	keyPressed: "",
	//Array with possible words
	wordsArr: ["patience","mahjong","chess","backgammon","sudok","blackjack", "poker","pyramid","draughts","minecraft",
				"destiny","skyrim","gta","Madden nfl", "monopoly","overwatch","dota","mario + rabbids", "splatoon"
	],
	//Array with incorret keys
	incorretArr:[],
	//Function to increase wins

};

