import "./Contact.style.scss";

import React from "react";
import { Route } from "react-router-dom";
import { Text } from "../../components/Text";
import { ContactForm } from "../../components/ContactForm";

export const Contact = () => {
    return (
        <Route path="/contact" exact>
            <article className="contact-page">
                <header className="contact-page__title">
                    <Text size="title" tag="h1" weight="bold">
                        Let’s chat! 🤙
                        <br />
                        Get in touch.
                    </Text>
                </header>
                <div className="contact-page__content">
                    <ContactForm />
                </div>
            </article>
        </Route>
    );
};
