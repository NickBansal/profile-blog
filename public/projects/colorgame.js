var colors = generateRandomColor(numSquares);
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("messageDisplay")
var h1Back = document.querySelector("h1");
var reset = document.getElementById("reset")
var modeBtn = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

for (i=0; i<modeBtn.length; i++) {
	modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1 ].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		newGame();
	})
}

for (i=0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			h1Back.style.backgroundColor = pickedColor;
			reset.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#FFFFFF";
			messageDisplay.textContent = "Try Again!"
		}
	})
};


reset.addEventListener("click", function(){
	newGame();
})

function changeColors(color){
	for(i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColor(num) {
	var arr = [];
	for(i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	r = Math.floor(Math.random() * 256)
	g = Math.floor(Math.random() * 256)
	b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function newGame(){
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	reset.textContent = "New Colors?";
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	for (i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1Back.style.backgroundColor = "steelblue";
}



