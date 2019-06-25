import React from "react";
import ReactDOM from "react-dom";
import Animals from "./data/animals";

ReactDOM.render(
    <section>{ `Mamy ${Animals.length} zwierząt, a oto one: ${Animals.join(', ')}` }</section>,
    document.getElementById('app')
);



