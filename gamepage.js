// random value generated
var y = Math.floor(Math.random() * 10 + 1)
var guess = 1
// counting the number of guesses
function submit() {
  var x = document.getElementById("guessField")
  console.log(y)
  // made for correct Guess
  if (x == y) {
    alert("CONGRATULATIONS!!! " + playername + "YOU GUESSED IT RIGHT IN " +
      guess + " Guess ");
    guess = 1;
  } else if (x > y) {
    guess++;
    alert("OOPS SORRY! TRY A SMALLER DIGIT");
  } else {
    guess++;
    alert("OOPS SORRY! TRY A BIGGER DIGIT");
  }
}
  // function for number guessed by user     
  function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
  }
