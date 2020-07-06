import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

export const App = () => (
    <Switch>
        <Route exact path="/">
            <h1>Home</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </Route>
        <Route exact path="/contact">
            <h1>Contact</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </Route>
    </Switch>
);
