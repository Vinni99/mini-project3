 alert("Do you want to play with me? I'm so lonely" );

 var wins = 0
var lose = 0
var tie = 0

function game(){

var userChoice = (window.prompt("Choose R P or S")).toUpperCase

var computerChoice = ["R", "P", "S"];
var CCMath = computerChoice[(Math.floor(Math.random() * 3))];


console.log(CCMath)

if (userChoice == "S", CCMath == "P") {
    alert("User wins");
    wins++;
} 
else if (userChoice == "P",  CCMath == "R") {
alert("User Wins");
     wins++;
}
else if (userChoice == "R", CCMath == "P") {
    alert("It's a Tie");
      wins++;
}
else if (userChoice == CCMath) {
    alert("Computer Wins");
    tie++;
}
else{
    alert("Computer Wins");
    lose++;
}

alert( 
    "wins" + wins + "lose" + lose + "ties" + ties

);
}

var playAgain = confirm("Play again?");

if (playAgain) {
    game();
};