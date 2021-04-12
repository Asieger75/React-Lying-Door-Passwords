import React from "react";
import LoggingButton from "../button";


function Body(props) {
    return (
        <div>
            <div className="wrapper">
                <header>
                    <h1>The Lying Door Password Generator</h1>
                </header>
                <div className="card">
                    <div className="card-header">
                        <h2>Generate a Password</h2>
                    </div>
                    <div className="card-body">
                        <textarea id="password" placeholder="Your Secure Password" aria-label="Generated Password" value={props.password}  ></textarea>
                    </div>
                    <div className="card-footer">
                       <LoggingButton  setPassword={props.setPassword} Script={props.Script}/>
                      
                    </div>
                </div>
            </div>
           
        </div>

    )
}




export default Body
