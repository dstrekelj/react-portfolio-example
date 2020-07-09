import "./AppLayout.style.scss";

import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "../Wrapper";
import { Switch } from "react-router-dom";
import { Copyright } from "../Copyright";

export const AppLayout = (props) => {
    const { header, main } = props;

    return (
        <Wrapper>
            <div className="app-layout">
                <header className="app-layout__header">{header}</header>
                <main className="app-layout__main">
                    <Switch>{main}</Switch>
                </main>
                <footer className="app-layout__footer">
                    <Copyright />
                </footer>
            </div>
        </Wrapper>
    );
};

AppLayout.propTypes = {
    header: PropTypes.node,
    main: PropTypes.node,
};
