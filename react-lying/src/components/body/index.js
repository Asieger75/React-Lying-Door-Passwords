import React from "react";


function Body() {
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
                        <textarea readonly id="password" placeholder="Your Secure Password" aria-label="Generated Password"></textarea>
                    </div>
                    <div className="card-footer">
                        <button id="generate" className="btn">Generate Password</button>
                    </div>
                </div>
            </div>
            <script src="Js/script.js"></script>
        </div>

    )
}




export default Body
