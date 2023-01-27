//Select your elements First
// these are the targets => these are the "user uses"
//this is a 1 to 1 connection to an element in DOM
//let naButton = document.querySelector ('#navButton');


//this is a 1 to 1 connection to an element in DOM
let navButtons = document.querySelectorAll('#buttonHolder img'),
theHeadline = document.querySelector('#headLine h1'),
puzzleBoard =document.querySelector('.puzzle-board');




// Functions go in the middle
//these are the "actions" that should happen
function changeBGImage() {
	debugger;
	//objectproperty = "new value"
	//theHeadline.textContent = "Drag and Drop is Fun"

	//change the background image in the dropzone

	puzzleBoard.getElementsByClassName.backgroundImage ='url("../image/backGround" + this.id".jpg")';
	//that function its calling a css class to apply a custom settings on it
	//theHeadline.classList.add('orange-headline')
}


//goto https://developer.mozilla.org/en-US/search?q=change+image+background+with+java+script and find the solution to change background

//event handling at the bottom => hoe things react
//how the user going to interact with the elements / controls you provide?

//process acollection of elements and add an event handler to each 
navButtons.forEach(button => button.addEventListener('click', changeBGImage));