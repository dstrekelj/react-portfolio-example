import "./assets/styles/style.scss";

import React from "react";
import { Home } from "./pages/Home";
import { AppLayout } from "./components/AppLayout";
import { Navigation } from "./components/Navigation";

export const App = () => <AppLayout header={<Navigation />} main={<Home />} />;
