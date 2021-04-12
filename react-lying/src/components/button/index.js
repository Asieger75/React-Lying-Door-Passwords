import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));

class LoggingButton extends React.Component {

    handleClick = () => {
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
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }

  export default LoggingButton