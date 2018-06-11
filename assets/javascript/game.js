function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
 };

// //computer chooses random word from roaster array for user to guess 
var wordToGuess = ['parlor', 'madcap', 'sweet bloom', 'middle state', 'stumptown', 'verve', 'olympia', 'slate', 'blue bottle'];; // Just an example, your real word should come from an array
var randomNumber = Math.floor(Math.random()*wordToGuess.length);
var randomItem = wordToGuess[randomNumber];


// //display dashes on screen with appriopiate number of dashes for user to guess

var displayWord = "_"; // Will provide on blank space
displayWord = displayWord.repeat(randomItem.length);
var guessedWord = "_";
guessedWord = guessedWord.repeat(randomItem.length); // build an empty string that is same size as word user is trying to guess 
// document.getElementById("wordholder").innerHTML = randomItem; // debugging purposes
document.getElementById("wordholder").innerHTML += displayWord;

document.addEventListener("click", function (e) {
var guessedCharacter = e.target.id;
if(e.target.getAttribute("class") === "input"){
    document.getElementById(guessedCharacter).remove();
    if (randomItem.includes(guessedCharacter)){
        console.log("good guess");
        for (var i = 0; i < randomItem.length; i++) {
            if (randomItem[i].toLowerCase() === guessedCharacter){
               guessedWord = replaceAt(guessedWord, i, guessedCharacter);
            }
            if(randomItem[i] === " "){
               guessedWord = replaceAt(guessedWord, i, " ");
            }
        }
        document.getElementById("wordholder").innerHTML = guessedWord;
    } if (randomItem === guessedWord) {
        alert("You Win!!!");
    }
} 
    console.log(e.target.id);
});


// subtract 1 life from lives for every wrong guess
const myLives = 6;
check = function () {
    list.onclick = function () {
    myLives = (this.innerHTML);
    this.setAttribute("class", "active");
    for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          myLives[i].innerHTML = geuss;
          counter += 1;
          var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
}
}

// const myLives = 6;
// function lives() {
//     document.getElementById("mylives").innerHTML = lives;
//     if (!wordToGuess.includes(guessedWord)){
//         mylives -= 6;
//     }
// };


// stickman canvas 
canvas = function (){
    myStickman=document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

head = function (){
    myStickman=document.getElementById("stickman");
    ontext = myStickman.getContext('2d');
};
body = function (){
    myStickman=document.getElementById("stickman");
    ontext = myStickman.getContext('2d');
};
rightArm = function (){
    myStickman=document.getElementById("stickman");
    ontext = myStickman.getContext('2d');
};
leftArm = function (){
    myStickman=document.getElementById("stickman");
    ontext = myStickman.getContext('2d');
};
rightLeg = function (){
    myStickman=document.getElementById("stickman");
    ontext = myStickman.getContext('2d');
};
leftLeg = function (){
    myStickman=document.getElementById("stickman");
    ontext = myStickman.getContext('2d');
};
drawArray = [rightLeg, leftLeg, rightArm, leftArm,  body,  head]; 
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   body = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  

