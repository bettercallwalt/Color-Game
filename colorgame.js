var squares = document.querySelectorAll(".square");
var colornum =6;
var colors = generatecolors(colornum);
var pickedcolor = pickcolor();
var colordisplay = document.querySelector("#colordisplay");
var messagedisplay = document.querySelector("#messagedisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function() {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colornum = 3;
	colors = generatecolors(colornum);
	pickedcolor = pickcolor();
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	colordisplay.textContent = pickedcolor;
});

hard.addEventListener("click", function() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colornum = 6;
	colors = generatecolors(colornum);
	pickedcolor = pickcolor();
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
		} if(squares[i].style.display = 'null'){
			squares[i].style.display = "block";
		}
	}
	colordisplay.textContent = pickedcolor;
});


colordisplay.textContent = pickedcolor;
for(var i=0; i<squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if (pickedcolor === clickedcolor) {
			messagedisplay.textContent = "Correct!";
			changecolor(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
			reset.textContent = "Play Again?"
		}  
		else{
			messagedisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});

}

reset.addEventListener("click",function(){
	colors = generatecolors(colornum);
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	h1.style.background = "steelblue";
	reset.textContent = "New Colors";
	messagedisplay.textContent = "";
});






function changecolor(color){
	for (var i = 0; i <squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickcolor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generatecolors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(generatergb());
	}
	return arr;
}

function generatergb(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")" ;
}