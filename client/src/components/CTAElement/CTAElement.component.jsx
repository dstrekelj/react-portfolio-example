import "./CTAElement.style.scss";

import React, { cloneElement } from "react";
import { Text } from "../Text";
import classNames from "classnames";

export const CTAElement = ({ element, className, children, ...restProps }) => {
    return cloneElement(
        element,
        { className: classNames(className, "cta-element"), ...restProps },
        <Text tag="span" size="lead" textStyle="italic">
            <span className="cta-element__icon">👉</span>
            <span className="cta-element__label">{children}</span>
        </Text>
    );
};
