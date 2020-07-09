import "./Home.style.scss";

import React from "react";
import { Link, Route } from "react-router-dom";
import { Text } from "../../components/Text";
import image from "../../assets/images/jane-cooper.jpg";
import { CTAElement } from "../../components/CTAElement";

export const Home = () => {
    return (
        <Route path="/" exact>
            <article className="home-page">
                <header className="home-page__title">
                    <Text size="title" tag="h1" weight="bold">
                        Hi! 👋
                        <br />
                        I’m Jane Cooper.
                    </Text>
                </header>
                <img
                    className="home-page__image"
                    src={image}
                    alt="Jane Cooper"
                />
                <div className="home-page__content">
                    <Text size="lead" tag="p">
                        I'm a web developer working out of Santa Ana, Illinois.
                    </Text>
                    <Text size="lead" tag="p">
                        I want to make the web more accessible.
                    </Text>
                    <Text size="lead" tag="p">
                        {/* <Link to="/contact">
                            <Text size="lead" tag="span" textStyle="italic">
                                👉 Let's do it together
                            </Text>
                        </Link> */}
                        <CTAElement element={<Link to="#" />} to="/contact">
                            Let's do it together
                        </CTAElement>
                    </Text>
                </div>
            </article>
        </Route>
    );
};
