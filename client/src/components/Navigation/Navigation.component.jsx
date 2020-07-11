import "./Navigation.style.scss";

import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item">
                <NavLink className="navigation__link" to="/" exact>
                    Home
                </NavLink>
            </li>
            <li className="navigation__item">
                <NavLink className="navigation__link" to="/contact" exact>
                    Contact
                </NavLink>
            </li>
        </ul>
    </nav>
);
