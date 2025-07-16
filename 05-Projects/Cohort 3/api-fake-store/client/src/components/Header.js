import React from "react";
import "../App.css"

const Header = ({message}) => {
    return(
        <div id="Header" >
            <h1>{message}</h1>
        </div>
    )
};

export default Header;