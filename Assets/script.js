// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseOptions = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseOptions = lowercaseOptions.toUpperCase();
var numericOptions = '1234567890';
var specialOptions = '~`!@#$%^&*()_-+={}[]\|;:"<>,.?';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password.length);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";

  const passwordlength = prompt("How long would you like your password?");
  if (password) {
    console.log("Secured");
  }

  var lowercase = confirm("Do you want lowercase?");
  if (lowercase) {
    console.log("confirmed");
  }
  var uppercase = confirm("Do you want uppercase?");
  if (uppercase) {
    console.log("confirmed");
  }
  var numeric = confirm("Do you want numeric?");
  if (numeric) {
    console.log("confirmed");
  }
  var special = confirm("Do you want special?");
  if (special) {
    console.log("confirmed");
  }

  const length = 12;

  console.log(getRandomValue(lowercaseOptions));
  console.log(getRandomValue(uppercaseOptions));
  console.log(getRandomValue(numericOptions));
  console.log(getRandomValue(specialOptions));

  if (lowercase) {
    password = password + getRandomValue(lowercaseOptions);
  }
  if (uppercase) {
    password = password + getRandomValue(uppercaseOptions);
  }
  if (numeric) {
    password = password + getRandomValue(numericOptions);
  }
  if (special) {
    password = password + getRandomValue(specialOptions);
  }

  for (let i = 0; i < length; i++) {
    password = password + getRandomValue(lowercaseOptions);
    password = password + getRandomValue(uppercaseOptions);
    password = password + getRandomValue(numericOptions);
    password = password + getRandomValue(specialOptions);
    
  }

  return password.substring(0, length);
}

function getRandomValue(str) {
  const randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}
