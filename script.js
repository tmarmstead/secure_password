// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My code below

var lettersCapitalToChoose = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z",];

var lettersLowerCaseToChoose = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z",]; 

var numbersToChoose = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharToChoose = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",];

var charPot = [];

function generatePassword() {
  
  var lengthOfPassword = prompt("How many characters do you want to include in your password");
if (lengthOfPassword < 8 || lengthOfPassword > 128) {
 alert("Please select a number greater than 7 and less than 129.");
 prompt("How many characters do you want to include in your password");
}

var lowerCase = confirm("Do you want to include lower case letters?");
if (lowerCase) {
  charPot = charPot.concat(lettersLowerCaseToChoose);
}

var upperCase = confirm("Do you want to include upper case letters?");
if (upperCase) {
  charPot = charPot.concat(lettersCapitalToChoose);
} 

var numbers = confirm("Do you want to include numbers?");
if (numbers) {
  charPot = charPot.concat(numbersToChoose);
} 

var specialChar = confirm("Do you want to include special characters?");
if (specialChar) {
  charPot = charPot.concat(specialCharToChoose);
}
var final = "";
for(var i = 0; i < lengthOfPassword; i++) {
var potPull = Math.floor(Math.random() * charPot.length);
final += charPot[potPull];
console.log(final);
}
return final;



// console.log(potPull);
// console.log(charPot);
}

generatePassword();


// function captureUserInputs() {
//     var passLength = alert("Password will be 8 characters long.")
//     var lowerCase = confirm("Do you want to include lower case letters?");
//     var upperCase = confirm("Do you want to include upper case letters?");
//     var numbers = confirm("Do you want to include numbers?");
//     var specialChar = confirm("Do you want to include special characters?");
//     console.log(captureUserInputs);
// }

// captureUserInputs();



// var userOptions = {
//     return {
//       length: passLength,
//       lowerCase: lowerCase,
//       upperCase: upperCase,
//       numbers: numbers,
//       specialChar: specialChar,
//     }
//   }
//   console.log(userOptions);

// code from Tutoring Session 11/16:

/*  function to capture user inputs
      capture length via prompt - parseInt()
      capture lowercase via confirm
      capture upperCase via confirm
      capture numbers via confirm
      capture special characters via confirm

    Return object including line 25-29

    var passOptions = {
      length: length,
      includesLower: lowerCase,
      includesUpper: upperCase,
      includesNumbers: numbers,
      includesSpeciaChar: specialChar
    }
 /*

    function to generate password() {
    
      var passwordPot = [];
      var passwordFinal = [];
      
      var options = generateUserInputs();

      Evaluate what to put in the pot

        if (options.includesLower === true) Add lowerArray to the pot
        if (options.includesUpper) Add uppeArray to the pot
        * numbers
        * special

      Loop through the pot (length times) 

        Generate a random index

            let randomNumber = Math.floor(Math.random() * pot.length - 1)

        Copy pot selection

            let temp = pot[randomNumber];

        Put temp into our array

            passwordFinal.push(temp)

    return passwordFinal, but in string form

        How to turn array into string???

    }*/
 