
var theAnswer;

function checkGuess() {
	var theGuess = parseInt(document.getElementById("myGuess").value);
	document.getElementById("result").value = theGuess;
	alert(theGuess + ' ' + theAnswer);
	if (theGuess === theAnswer) {
		document.getElementById("result").value = 'You got it right';
	} else if (theGuess > theAnswer) {
		document.getElementById("result").value = 'You guessed too high';
	} else if (theGuess < theAnswer) {
		document.getElementById("result").value = 'You guessed too low';
	}
}
function init() {
	document.getElementById("checkGuess").addEventListener("click", checkGuess);
	theAnswer = Math.floor((Math.random() * 10) + 1);
}
window.onload=init;