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

function generatePassword() {
  var password = "";

  const passwordlength = prompt("How long would you like your password?");

  var lowercase = confirm("Do you want lowercase?");
  var upppercase = confirm("Do you want uppercase?");
  var numeric = confirm("Do you want numeric?");
  var special = confirm("Do you want special?");

  return password;
}
