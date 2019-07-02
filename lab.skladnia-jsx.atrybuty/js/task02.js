import React from "react";
import ReactDOM from "react-dom";

const color = prompt("Podaj kolor ramki");
const arr = ['red', 'green', 'blue'];
let wynik;

if (arr.indexOf(color) === -1) {
    wynik = <div>Nieprawdiłowy kolor</div>
} else {
    let style = {
        width: '100px',
        height: '100px',
        border: `5px solid ${color}`
    }
    wynik = <div style={style}></div>
}


ReactDOM.render(
    wynik,
    document.getElementById("app")
);

