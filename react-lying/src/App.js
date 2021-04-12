import './App.css';
// import Script from './script.js';
import Body from './components/body/index';
import React, { useState } from 'react';

function App() {
  
  const [password, setPassword] =  useState("")
  function Script(passLength, lower, upper, numerals, specials) {
    var password = new Array(passLength);
    var lowerArray = "abcdefghijklmnopqrstuvwxyz";
    var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialArray = "!#$%&'()*+,-./:;<=>?@[\\^_`{|}~";
    var numbArray = "0123456789";
    for (var i = 0; i < passLength; i++) {
      var ranArray = Math.floor(Math.random() * 4);

      // this is where the fun begins // 
      if (ranArray === 0) {
        if (lower === true) {
          var lowerSelection = Math.floor(Math.random() * lowerArray.length);
          password[i] = lowerArray[lowerSelection];
        }
        else {
          i--;
        }
      }
      else if (ranArray === 1) {
        if (upper === true) {
          var upperSelection = Math.floor(Math.random() * upperArray.length);
          password[i] = upperArray[upperSelection];
        }
        else {
          i--;
        }
      }
      else if (ranArray === 2) {
        if (specials === true) {
          var specialSelection = Math.floor(Math.random() * specialArray.length);
          password[i] = specialArray[specialSelection];
        }
        else {
          i--;
        }
      }
      else if (ranArray === 3) {
        if (numerals === true) {
          var numberSelection = Math.floor(Math.random() * numbArray.length);
          password[i] = numbArray[numberSelection];
        }
        else {
          i--;
        }
      }

    }
    return password.join('');
  }


  // Write password to the #password input
  
  return (
    <div>
      <Body  password={password} setPassword={setPassword}  Script={Script}/>
      {/* <Script/> */}

    </div>

  );
}

export default App;
