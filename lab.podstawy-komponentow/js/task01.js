import React from "react";
import ReactDOM from "react-dom";


class LikeBox extends React.Component {
    render() {
        return (
            <dvi>
                <span id="counter">100</span> likes
                <button>Like</button>
            </dvi>
        )
    }
}

ReactDOM.render(
    <LikeBox />,
    document.getElementById("app")
);



/**
 * Nie modyfikujcie kodu poniżej
 */
export { LikeBox };
