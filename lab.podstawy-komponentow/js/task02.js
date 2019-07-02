import React from "react";
import ReactDOM from "react-dom";


class Menu extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <a>Strona Główna</a>
                </li>
                <li>
                    <a>Blog</a>
                </li>
                <li>
                    <a>Cennik</a>
                </li>
                <li>
                    <a>Kontakt</a>
                </li>
            </ul>
        )
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById("app")
);




/**
 * Nie modyfikujcie kodu poniżej
 */
export { Menu };
