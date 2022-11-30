//GLOBAL VARIABLES
let time
let score = 0
let isPlaying


// THIS IS THE GAME LEVEL DIFFICULT Y FUNCTION 
let levels = document.querySelector(".levels")		
		function gameDifficulty(){
		event.preventDefault()
		if(levels.value === "easy"){
			time = 7
		}
		else if(levels.value === "medium"){
			time = 5
		}
		
		else if(levels.value === "hard"){
			time = 3
		}
		else if(levels.value === "extreme"){
			time = 2
		}	
	}
	

//DOM VARIABLES
let levelContainer = document.querySelector(".level-container")
let startBtn = document.querySelector(".start-btn")
let gameContainer = document.querySelector(".container")
let seconds = document.querySelector(".seconds")
let currentWord = document.querySelector(".current-word")
let wordInput = document.querySelector(".word-input")
let remark = document.querySelector(".remark")
let timeDisplay = document.querySelector(".time")
let scoreDisplay = document.querySelector(".score")
let instruction = document.querySelector(".instruction")

// This Function initializes the game when the start button is clicked
	function startGame(){
		//The game difficulty function is called to initialize the time
		gameDifficulty()
		//Display the current time
		timeDisplay.textContent = time
		//Display the game container
		gameContainer.classList.remove("hide")
		//Hide the start button	
		startBtn.classList.add("hide")
		//Hide the Level Container
		levelContainer.classList.add("hide")
		//Hide the instruction
		instruction.classList.add("hide")
		//fire the initializing function
		initial()
	}
	startBtn.addEventListener("click", startGame)
	
	

// ARRAY CONTAINING A LIST OF WORDS
const words = ["Estate", "Freedom", "Enterprise", "School", "Yesterday", "Country", "JavaScript", "Powerful", "Theater", "Center", "Excellence", "Cybersecurity", "Element", "Subwoofer", "System", "Continent", "Home", "Worship", "River", "Space", "Fanbase", "Editor", "Lawyer", "House", "Sport", "Post", "Father", "Mother", "Water", "Caricature", "Animal", "Decentralize", "Gross", "Initiation", "Zenith", "Yatch", "Winner", "Preacher", 
               "Living", "Redeemed", "Xylophone", "Babylon", "Python", "Programmer", "Arithmetics", "Ditto", "Elegance", "Superb", "Preview", "Formation", "Psychology", "Football", "Education", "Extreme", "Family", "Physiology", "Quintessential", "Catalyst", "Successful", "Brilliant", "Artificial", "Compression", "Delegate", "Perception", "Materialistic", "Singleton", "Complicated", "Greatness", "Development", "Magnitude"]


// FUNCTION TO FIRE WHEN THE PAGE LOADS
function initial(){
	//load word from array
	showWord(words)
	//start matching on input
	wordInput.addEventListener("input", startMatch)
	//call countdown function
	setInterval(countdown, 1000)	
	//check game status
	setInterval(checkStatus, 50)
	//Total time allocated display
	seconds.textContent = time  + " seconds"
}

//PICK AND SHOW WORD FROM ARRAY
function showWord(words){
	// generate random array index
	const randomIndex = Math.floor(Math.random() * words.length)
	//output random word
	currentWord.textContent = words[randomIndex]	
}


//START MATCH
function startMatch(){
	if(matchWords()){
		//fire the gameDifficulty function to reset
		gameDifficulty()
		++time
		isPlaying = true
		showWord(words)
		wordInput.value = ""
		score++
	}
	//change score to zero if score is -1
	if(score === -1){
		scoreDisplay.innerHTML = 0
	}
	//update new score
	else{
		scoreDisplay.innerHTML = score 		
	}
}


//MATCH CURRENT WORD TO WORD INPUT
function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
		remark.innerHTML = "Correct"
		remark.style.color = "green"
		return true
	}
	else{
		remark.innerHTML = "..."
		return false
	}
}


//COUNTDOWN TIMER 
function countdown(){
	//make sure the time is not run out
	if(time > 0){
		//decrement	
		time--	
	}
	else if(time === 0){
		//game over
		isPlaying = false
	}
	//show time
	timeDisplay.textContent = time		
}


//FUNCTION TO CHECK GAME STATUS
function checkStatus(){
	if(time === 0){		
		remark.innerHTML = "Game Over!!!"
		remark.style.color = "red"
		score = -1 			
	}	
}
