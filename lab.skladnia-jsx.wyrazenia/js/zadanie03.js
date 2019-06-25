import React from "react";
import ReactDOM from "react-dom";


const numA = parseFloat(prompt("Wpisz A"));
const numB = parseFloat(prompt("Wpisz B"));
const x = prompt('Wpisz działanie');

let wynik;

if (x === '+') {
    wynik = <h1>{numA + numB}</h1>;
} else if (x === '-') {
    wynik = <h2>{numA - numB}</h2>;
} else if (x === '*') {
    wynik = <h3>{numA * numB}</h3>;
} else {
    wynik = <h4>{numA / numB}</h4>;
}

ReactDOM.render(
    wynik,
    document.getElementById('app')
)
