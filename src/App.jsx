import "./assets/styles/style.scss";

import React from "react";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/AppLayout";
import { Navigation } from "./components/Navigation";

const Main = () => (
    <>
        <Home />
        <Contact />
    </>
);

export const App = () => <AppLayout header={<Navigation />} main={<Main />} />;
