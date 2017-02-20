
// FUNCTION RETURNS STRING IN REVERSE ORDER
function reversal(inputStr) {

	var reversedStr = ""; 
	for (var i=inputStr.length-1; i>-1; i--) {
		reversedStr += inputStr[i];
	}
	return reversedStr;
};


// FUNCTION RETURNS STRING ALPHABETIZED STRING
function alphabits(inputStr) {

	return inputStr.toLowerCase().split('').sort().join('');
};


// FUNCTION RETURNS <true> IF PALINDROME; <false> IF NOT
function palindrome(inputStr) {

	var inputStr = inputStr.toLowerCase();

	var loopLength;
	if (inputStr.length%2 === 0) {			  // string has even number of elements
		loopLength = inputStr.length/2; 	
	} else {								  // string has odd number of elements
		loopLength = (inputStr.length+1) / 2; 
	}

	for (var i=0; i<loopLength; i++) {

		if (inputStr[i] !== inputStr[inputStr.length - (i+1)]) { 

			return false; // characters do not match ; not a palindrome										 // not a palindrome
		}
	}
	return true; // string is a palindrome
};



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
			document.getElementById("inputStr").value = ""; // reset user input field
			return false;
		}
	}
	return true; // inputStr is all alpha
};


function runMain() {
	var testString = document.getElementById("inputStr").value;
	var reversed; 		// string, returned from function
	var alphabetized;	// string, returned from function
	var isPalindrome;	// <true/false>, returned from function
	var palindromeStr;	// output string
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



