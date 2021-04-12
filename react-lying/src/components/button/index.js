import React from 'react';
import ReactDOM from 'react-dom';


class LoggingButton extends React.Component {

        handleClick = () => {
            console.log("hit")
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
        var password = this.props.Script(passLength, lower, upper, numerals, specials);
        this.props.setPassword(password);
      
    }
  
    render() {
      return (
            <button onClick={() => {this.handleClick()}}>
          Click me
        </button>
      );
    }
  }

  export default LoggingButton