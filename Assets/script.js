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

function generatePassword() {
  //variable and array declarations
  var lettersBig = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lettersSmall = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specialChars = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //this could have simply been math.random*10 but making the array felt more aesthetically pleasing
  var choices = [lettersBig, lettersSmall, specialChars, numbers];
  var minNum = 8;
  var maxNum = 128;
  var passwordSize = NaN;
  var useBig, useSmall, useChars, useNums = false;
  var passwordTemp = '';

  //user password character selection.
  do {
  useBig = confirm("Does your password need uppercase letters?\n'Ok' for Yes, 'Cancel' for No");
  useSmall = confirm("Does your password need lowercase letters?\n'Ok' for Yes, 'Cancel' for No")
  useChars = confirm("Does your password need special characters?\n'Ok' for Yes, 'Cancel' for No")
  useNums = confirm("Does your password need numbers?\n'Ok' for Yes, 'Cancel' for No")

  //input validation requiring the user to choose at least one character type
  if ((useBig!=true)&&(useSmall!=true)&&(useChars!=true)&&(useNums!=true)){
    alert("Do you even want a password?\nA selection must be made...")
  }
  } while((useBig!=true)&&(useSmall!=true)&&(useChars!=true)&&(useNums!=true));

  //queries user for password length. runs until user provides a valid
  do {
    passwordSize = Number(prompt("How many characters do you need?\nMust be at least 8 and cannot exceed 128."));
    
    if ((isNaN(passwordSize)) || (passwordSize < minNum ) || (passwordSize > maxNum)){
      if (isNaN(passwordSize)) {
        alert("Invalid entry\nmust be a NUMBER")
      } else if (passwordSize < minNum ) {
        alert("Invalid entry\nMinimum length is 8.")
      } else if (passwordSize > maxNum) {
        alert("Invalid entry\nMaximum length is 128")
      }
    }
  } while ((isNaN(passwordSize)) || (passwordSize < minNum) || (passwordSize > maxNum))
  //this line avoids trolls that enter decimals
  passwordSize = Math.floor(passwordSize)
  
  //if statements remove arrays of characters the user declined. 
  //for loop runs through the multidimensional array and removes the array based on its first index
  if (useBig==false) {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i][0]=='A'){
        choices.splice(i, 1);
      }
    }
  }
  if (useSmall==false) {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i][0]=='a'){
        choices.splice(i, 1);
      }
    }
  }
  if (useChars==false) {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i][0]==' '){
        choices.splice(i, 1);
      }
    }
  }
  if (useNums==false) {
    for (let i = 0; i < choices.length; i++) {
      if (choices[i][0]=='0'){
        choices.splice(i, 1);
      }
    }
  }

  for (let i = 0; i < passwordSize; i++) {
    var index1 = Math.floor(Math.random()*choices.length);
    var index2 = Math.floor(Math.random()*choices[index1].length);
    passwordTemp += choices[index1][index2]
  }

  return passwordTemp
}
