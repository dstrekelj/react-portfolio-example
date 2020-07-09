import "./Wrapper.style.scss";

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Wrapper = (props) => {
    const { tag, children, className, ...restProps } = props;

    return React.createElement(
        tag || "div",
        {
            ...restProps,
            className: classNames("wrapper", className),
        },
        children
    );
};

Wrapper.propTypes = {
    tag: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
};
