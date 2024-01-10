// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lettersBig = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lettersSmall = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChars = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //this could have simply been math.random*10 but making the array felt more aesthetically pleasing
var choices = [lettersBig, lettersSmall, specialChars, numbers];
var minNum = 8;
var maxNum = 128;
var index1 = Math.floor(Math.random()*choices.length);
var index2 = Math.floor(Math.random()*choices[index1].length);