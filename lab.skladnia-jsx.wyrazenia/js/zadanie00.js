import React from 'react';
import ReactDOM from 'react-dom';


const numA = parseFloat(prompt("Wpisz A"));
const numB = parseFloat(prompt("Wpisz B"));

ReactDOM.render(<div>{numA + numB}</div>, document.getElementById("app"));