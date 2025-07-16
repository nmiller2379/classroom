import React from "react";

import { NavLink } from "react-router-dom";
import "../App.css"

const Navbar = () => {
    return(
        <div className="navbar">
            <h1>External API Practice Site</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/jewlery">Jewlery</NavLink>
            <NavLink to="/womensClothing">Womens Apparel</NavLink>
            <NavLink to="/electronics">Electronics</NavLink>
        </div>
    )
};

export default Navbar;