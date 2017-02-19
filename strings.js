// 4. Implement the logic in the reversal function that reverses the order 
// of the characters in the string, and outputs the result in the DOM, 
// below the text input.
function reversal() {

}



// 5. Implement the logic in the alphabits function that return the characters 
// in alphabetical order, and outputs the result in the DOM, below the text input.
function alphabits() {

}



// 6. Implement the logic in the palindrome function that determine whether 
// the string is a palindrome. If it is, display the text "Your string is a palidrome" 
// in the DOM, below the text input.
function palindrome() {

}



// 7. When the user presses the enter key in the text input, or clicks the button, 
// set the value of the testString variable (see below) to the value of the input.

// 8. The output of each of the functions should immediately appear as well.



//*************************************************
// EVENT HANDLERS
//*************************************************
inputStr.addEventListener("keyup", function(e) {
     e.which = e.which || e.keyCode;
     if (e.which === 13) {
// console.log("in event handler");
     	
     	if (alphaInput()) {
     		runMain();
        	
        } else {
     		alert("You must enter alpha characters only.")
     		return false;
     	}

     } else { // not <Enter> key
     	return false;
     }
 });

// verify only alpha characters
// UPPERCASE 65 thru 90 inclusive ; lowercase 97 thru 122 inclusive
function alphaInput () {
	var str = document.getElementById("inputStr").value;

	for (var i=0; i< str.length; i++) {
		if ((str[i] < 65 || str[i] > 90) && (str[i] < 97 || str[i] > 123)) {
		// then not alpha
// console.log("validated not all alpha");
// clearHTMLFields();
		return false;
		}
	}
// console.log("validated all alpha");
	return true; // all alpha
}

function runMain() {
	console.log("running main");
	var testString = "";
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
}



