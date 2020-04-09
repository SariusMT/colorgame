var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode")

init();

function init() {
    setupModeButtons();
    setupSquareListeners();
    reset();
}

function setupSquareListeners() {
    for(var i=0;i<squares.length;i++){

        //add event listeners to squares
        squares[i].addEventListener("click",function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Corect!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "steelblue";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function setupModeButtons(){
    for ( var i=0; i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function () {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        })
    }
}

function reset(){
    // generate new colors
    colors = generateRandomColors(numberOfSquares);
    //pick new random color from array
    pickedColor = pickColor()
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0 ;i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
})

function changeColors(color) {
    //loop trough all squares
    //change each color to match given color
    for ( var i=0;i<colors.length;i++) squares[i].style.backgroundColor = color;
}

function pickColor() {
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(number) {
    // create an array
    var arr = [];
    //repeat number times
    for (var i=0; i<number;i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //get a random value for red color between 0 and 255
   var r = Math.floor(Math.random()*256);
    //get a random value for green color between 0 and 255
    var g = Math.floor(Math.random()*256);
    //get a random value for blue color between 0 and 255
    var b = Math.floor(Math.random()*256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
}