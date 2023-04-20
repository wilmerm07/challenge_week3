var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var generatedPassword = "";

  // Ask the user how many characters
  var numberOfCharacters = prompt("How many characters in the password (between 8 and 128)?");

  // Validate the input for the number of characters
  while (numberOfCharacters < 8 || numberOfCharacters > 128) {
    numberOfCharacters = prompt("Invalid input. Please enter a number between 8 and 128:");
  }

  // Ask if the user wants to include special characters
  var includeSpecialCharacters = confirm("Do you want to include special characters?");

  var includeUpperCaseLetters = confirm("Do you want to include upper case letters?");

  var includeLowerCaseLetters = confirm("Do you want to include lower case letters?");

  var includeNumbers = confirm("Do you want to include numbers?");

  // Validate that at least one type of character is selected
  while (!includeSpecialCharacters && !includeUpperCaseLetters && !includeLowerCaseLetters && !includeNumbers) {
    alert("Please select at least one type of character.");
    includeSpecialCharacters = confirm("Do you want to include special characters?");
    includeUpperCaseLetters = confirm("Do you want to include upper case letters?");
    includeLowerCaseLetters = confirm("Do you want to include lower case letters?");
    includeNumbers = confirm("Do you want to include numbers?");
  }

  
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);