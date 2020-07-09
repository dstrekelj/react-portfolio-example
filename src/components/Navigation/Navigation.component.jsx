import "./Navigation.style.scss";

import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item">
                <NavLink className="navigation__link" to="/">
                    Home
                </NavLink>
            </li>
        </ul>
    </nav>
);
