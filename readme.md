# NSS String Manipulation

### Project Description 
This exercise prompts for user text input, then outputs on the screen:
- the string charactors printed in reverse
- the string characters alphabetized
- whether or not the string is a palindrome


#### Screen Grab on Launch
![Screen Grab on Launch](...)

#### Screen Grab Showing Output, where input string is not a palindrome
![Screen Grab Output, Not a Palindrome](...)

#### Screen Grab Showing Output, where input string is a palindrome
![Screen Grab Output, String Is a Palindrome](...)


### Project Specs
Given, the following `JavaScript` code:

	```
	function reversal() {

	}

	function alphabits() {

	}

	function palindrome() {

	}

	var testString = "";
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
	```

- Created an `html` text input field and `Change This String` button. 
- Copied the code snippet provided, and wrote the respective functions to produce the desired output. 
- Wrote a supporting function, `onlyAlpha`, that validates the input consists of only alpha characters, no numbers. 
- Wrote the function `outputText` to write the results of `reversal`, `alphabits`, and `palindrome` to the DOM.
- Coded event listeners tied to the `Enter` key and the `Change This String` button to fire when pressed or clicked, respectively. 


### Technologies Used
- `html`
- `javascript`


### How To Run the App
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/stringManipulation.git
cd strings
npm install http-server -g
http-server -p 8080
```

This will show in your browser (at the console) at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

