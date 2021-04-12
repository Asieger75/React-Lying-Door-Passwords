var generateBtn = document.querySelector("#generate");
// arrays containing all the possible charachter options// 
function generatePassword(passLength, lower, upper, numerals, specials) {
  var password = new Array(passLength);
  var lowerArray = "abcdefghijklmnopqrstuvwxyz";
  var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialArray = "!#$%&'()*+,-./:;<=>?@[\\^_`{|}~";
  var numbArray = "0123456789";
  for(var i = 0; i<passLength;i++)
  {
    var ranArray = Math.floor(Math.random() * 4);

    // this is where the fun begins // 
    if (ranArray === 0)
    {  
      if (lower === true)
      {
       var lowerSelection = Math.floor(Math.random() * lowerArray.length);
       password[i] = lowerArray[lowerSelection];
      }
      else 
    {
      i--;
    }
    }
    else if (ranArray === 1)
    {
      if (upper === true)
      {
        var upperSelection = Math.floor(Math.random() * upperArray.length);
        password[i] = upperArray[upperSelection];
      }
      else 
    {
      i--;
    }
    } 
    else if (ranArray === 2)
    {
      if (specials === true)
      {
        var specialSelection = Math.floor(Math.random() * specialArray.length);
        password[i] = specialArray[specialSelection];
      }
      else 
    {
      i--;
    }
    } 
    else if (ranArray === 3)
    {
      if (numerals === true)
      {
        var numberSelection = Math.floor(Math.random() * numbArray.length);
        password[i] = numbArray[numberSelection];
      }
      else 
    {
      i--;
    }
    } 
    
  }
  return password.join('');
}


// Write password to the #password input
function writePassword() {
  var passLength = prompt("Between 8 to 128 charachters for your password, please");
  // find a way to write 'if passLength 7< and >129, then run rest of code as long as that fits
  if (passLength < 8) {
    alert("please try again")
    return
  }
    
  var lower = window.confirm("Press 'ok' to include lowercase letters in your password");
  var upper = window.confirm("Press 'ok' to include uppercase letters in your password");
  var numerals = window.confirm("Press 'ok' to include numbers in your password");
  var specials = window.confirm("Press 'ok' to include special symbols in your password");
  var password = generatePassword(passLength, lower, upper, numerals, specials);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.window.addEventListener("click", writePassword);
