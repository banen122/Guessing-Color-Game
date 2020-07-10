var squaresNum=6;
var Colors=[];
var pickedColor;
var modeButtons=document.querySelectorAll(".mode");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset")
var colorDisplyed=document.getElementById("displyColor");
var squares=document.querySelectorAll(".square")
var messageDisplay=document.querySelector("#message")

var yourScore=document.querySelector("#points")
var yourPoints=0;

function LoadingSite(){
    setupButtons();
    setupSquares();
    reset();
}
LoadingSite();

//Buttons
function setupButtons(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent==="Easy" ? squaresNum=3 : squaresNum=6;
            reset();
        
        });
        }
        resetButton.addEventListener("click",function(){
            reset();
            });

}

//squares
function setupSquares(){
    for(var i = 0 ;i < squares.length; i++){
        squares[i].style.background=Colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor=this.style.background;
        if(pickedColor===clickedColor){
            messageDisplay.textContent="Correct!!"
            changeColor(pickedColor);
            yourPoints++;
            yourScore.textContent=yourPoints
            h1.style.background=pickedColor;
            resetButton.textContent="Play Again !"
           
            
        }
        else{
            messageDisplay.textContent="Try Again!!"
            this.style.background="#232323"
            yourPoints--;
            yourScore.textContent=yourPoints;
            
        }
    })
      }
}

//random colors
function generateRandomColors(num){
    var arr=[]
    for(var i=0;i<num;i++){
     arr.push(randomColors())
    }
    return arr
}

function randomColors(){
   var r= Math.floor(Math.random()*256)
    var g= Math.floor(Math.random()*256)
    var b= Math.floor(Math.random()*256)
    return "rgb("+r+", "+g+", "+b+")"
}

//reset
function reset(){
    Colors=generateRandomColors(squaresNum);
    pickedColor=randomColor()
    colorDisplyed.textContent=pickedColor
    resetButton.textContent="NEW COLORS"
    messageDisplay.textContent=""
    colorDisplyed.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(Colors[i]){
            squares[i].style.display = "Block";
            squares[i].style.background=Colors[i]
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.background="#580420"
    
}
function randomColor(){
    var random=Math.floor(Math.random() *Colors.length);
    return Colors[random];
}


//change background color of squares that is correct
  function changeColor(color){
  for(var i=0;i<squares.length;i++){
      squares[i].style.background=color
  }
}



