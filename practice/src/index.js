import React from "react";
import ReactDOM from "react-dom";
import First from './First';
import Second from './Second';
import App from './App';




const App1 = () => {
    let pStyle = { 
        color: "blue",
        fontWeight: "bold",
        border: "5px sold yellow"
    }
    return (

        <div>
            <h1 style={pStyle} > Hello Michael</h1>
            < First />
            <Second />
            <App />
        </div>
        
    )
}



ReactDOM.render(<App1 />, document.querySelector('#root'));
