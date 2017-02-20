// 4. Implement the logic in the reversal function that reverses the order 
// of the characters in the string, 
// ... and outputs the result in the DOM, 
// below the text input.
//
// FUNCTION RETURNS STRING IN REVERSE ORDER
function reversal(inputStr) {

	var reversedStr = ""; 
	for (var i=inputStr.length-1; i>-1; i--) {
		reversedStr += inputStr[i];
	}
	return reversedStr;
};



// 5. Implement the logic in the alphabits function that return the characters 
// in alphabetical order, 
// ... and outputs the result in the DOM, below the text input.
//
// FUNCTION RETURNS STRING ALPHABETIZED STRING
function alphabits(inputStr) {

	return inputStr.toLowerCase().split('').sort().join('');
	
};



// 6. Implement the logic in the palindrome function that determine whether 
// the string is a palindrome. If it is, 
// ... display the text "Your string is a palidrome" 
// in the DOM, below the text input.
//
// FUNCTION RETURNS <true> IF PALINDROME; <false> IF NOT
function palindrome(inputStr) {

	var inputStr = inputStr.toLowerCase();

	var loopLength;
	if (inputStr.length%2 === 0) {
		loopLength = inputStr.length%2; 	// string has even number of elements
	} else {
		loopLength = inputStr.length%2 + 1; // string has odd number of elements
	}

	for (var i=0; i<loopLength; i++) {
console.log("in palindrome for loop");
console.log("inputStr[i] :: ", inputStr[i]);
console.log("inputStr[inputStr.length - (i+1)]");
		if (inputStr[i] !== inputStr[inputStr.length - (i+1)]) { // characters do not match
console.log("inputStr[i], for i = ", i, "; ", inputStr[i]);
console.log("inputStr[length - (i+1)] :: ", inputStr[ilength - (i+1)]);
			return false;										 // not a palindrome
		}
	}
	return true; // string is a palindrome
};




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
	var testString = document.getElementById("inputStr").value;
	var reversed; 
	var alphabetized;
	var isPalindrome;
	var palindromeStr;
	var outputText = document.getElementById("output");

	reversed = reversal(testString);

	alphabetized = alphabits(testString);

	isPalindrome = palindrome(testString);
	if (isPalindrome) {
		palindromeStr = "Your string is a palindrome";
	} else {
		palindromeStr = "Your string is not a palindrome";
	}

	outputText.innerHTML = "<p>Given String: " + testString + "</p>" 
		+ "<p>Reversed String: " + reversed + "</p>"
		+ "<p>Alphabetized String: " + alphabetized + "</p>"
		+ "<p>Palindrome? " + palindromeStr + "</p>";

	document.getElementById("inputStr").value = ""; // clear user input field
};



