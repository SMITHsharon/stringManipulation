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

// <EnterKey> Event Handler #ID inputStr
inputStr.addEventListener("keyup", function(e) {
     e.which = e.which || e.keyCode;
     if (e.which === 13) {

     	if (onlyAlpha()) {
     		runMain();
        	
        } else {
     		return false;
     	}

     } else { // not <Enter> key
     	return false;
     }
 });

// <Change This String> Event Handler #ID processStr
processStr.addEventListener("click", function() {
	
	if (onlyAlpha()) {
     	runMain();
        	
    } else {
     	return false;
    }
});

// validate only alpha characters
function onlyAlpha () {

	var alphaStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var inputStr = document.getElementById("inputStr").value;

	for (var i=0; i< inputStr.length; i++) {
		if (!alphaStr.includes(inputStr[i])) { // not alpha char
			alert("You must enter alpha characters only.")
			document.getElementById("inputStr").value = "";
			return false;
		}
	}
	return true; // inputStr is all alpha
};


function runMain() {
	console.log("running main");
	var inputStr = document.getElementById("inputStr").value;
	console.log("inputStr :: ", inputStr);
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
};



