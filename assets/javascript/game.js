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
    if (e.target.getAttribute("class") === "input") {
        document.getElementById(guessedCharacter).remove();
        if (randomItem.includes(guessedCharacter)) {
            console.log("good guess");
            for (var i = 0; i < randomItem.length; i++) {
                if (randomItem[i].toLowerCase() === guessedCharacter) {
                    guessedWord = replaceAt(guessedWord, i, guessedCharacter);
                }
                if (randomItem[i] === " ") {
                    guessedWord = replaceAt(guessedWord, i, " ");
                }
            }
            document.getElementById("wordholder").innerHTML = guessedWord;
        } else {
            myLives();
        } 
        if (randomItem === guessedWord) {
            alert("You Win!!!");
            }
    } 
    console.log(e.target.id);

});


// life decreaser
var lives = 6;
function myLives () {
    if (!randomItem.includes(guessedWord)) {
        lives--;
        document.getElementById("mylives").innerHTML = lives;
    } else {
        document.getElementById("mylives").innerHTML = "You Won";
    } 
}

// get element by id "mylives" is guessed charactor =/ word to guess subtract life from 6, when hit 0 display you loose