import React from "react";
import ReactDOM from "react-dom";


class SearchClass extends React.Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <button>Wyszukaj</button>
            </div>
        )

    }
}

    ReactDOM.render (
<SearchClass />,
    document.getElementById('app')
)


