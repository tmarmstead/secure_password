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

// code from attempt 11/18


function captureUserInputs() {
    var passLength = alert("Password will be 8 characters long.")
    var lowerCase = confirm("Do you want to include lower case letters?");
    var upperCase = confirm("Do you want to include upper case letters?");
    var numbers = confirm("Do you want to include numbers?");
    var specialChar = confirm("Do you want to include special characters?");
    console.log(captureUserInputs);
}

captureUserInputs();
