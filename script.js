// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;

    //   document.querySelector("textarea").value = generatePassword();
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
    let lengthOfPassword = parseInt(prompt("How many characters do you want to include in your password"));
    
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
        return alert("Please select a number greater than 7 and less than 129.");
    }
    
    let lettersCapitalToChoose = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    let lettersLowerCaseToChoose = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    let numbersToChoose = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let specialCharToChoose = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",];

    let lowerCase = confirm("Do you want to include lower case letters?");
    let upperCase = confirm("Do you want to include upper case letters?");
    let numbers = confirm("Do you want to include numbers?");
    let specialChar = confirm("Do you want to include special characters?");



    if (
        !lowerCase &&
        !upperCase &&
        !numbers &&
        !specialChar
    ) {
        return alert("Please select atleast one character type.");    
    }

    let charPot = [];

    if (lowerCase) {
        charPot = charPot.concat(lettersLowerCaseToChoose);
    }

    if (upperCase) {
        charPot = charPot.concat(lettersCapitalToChoose);
    }

    if (numbers) {
        charPot = charPot.concat(numbersToChoose);
    }

    if (specialChar) {
        charPot = charPot.concat(specialCharToChoose);
    }
    let final = [];
    for (let i = 0; i < lengthOfPassword; i++) {
        let potPull = Math.floor(Math.random() * charPot.length-1);
        let temp = charPot[potPull];
        final.push(temp);
        // final += charPot[potPull];
        // console.log(final);
    }
    return final.join("");
}




