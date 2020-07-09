import React from "react";
import { NavLink } from "react-router-dom";

export const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
};
