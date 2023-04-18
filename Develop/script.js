// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(SpecialCharacters, UpperCaseLetters, LowerCaseLetters, Numbers) {
  var passwordLength = 18
  var generatedPassword="";

// Do your thing here and generate a passsword
//  Ask the user how many characters
var numberOfCharacters=prompt("How many Characters in the password?");
//  Ask if the user wants to include special characters
var includeSpecialCharacters=Confirm("Do you want to include Special Characters?");
var includeUpperCaseLetters=Confirm("Do you want to include Upper Case Letters?");
var includeLowerCaseLetters=Confirm("Do you want to include Lower Case Letters");
var includeNumbers=Confirm("Do you want to include Numbers?");
// Generate a password with the number of characters and the types of characrters selected by user, and put it in the generatedPassword variable



  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
