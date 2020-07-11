import "./Text.style.scss";

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const sizeClass = (size) => ({
    "text-size-title": size === "title",
    "text-size-lead": size === "lead",
    "text-size-body": size === "body",
    "text-size-small": size === "small",
});

const weightClass = (weight) => ({
    "text-weight-300": weight == 300 || weight === "thin",
    "text-weight-700": weight == 700 || weight === "bold",
});

const familyClass = (family) => ({
    "text-family-mono": family === "mono" || family === "monospace",
});

const styleClass = (style) => ({
    "text-style-normal": style === "normal",
    "text-style-italic": style === "italic",
});

const colorClass = (color) => ({
    "text-color-normal": color === "normal",
    "text-color-dimmed": color === "dimmed",
});

const heightClass = (height) => ({
    "text-height-150": height == 150 || height == 1.5,
});

export const Text = (props) => {
    const {
        tag,
        children,
        size = "24-24",
        weight = "300",
        family = "monospace",
        textStyle = "normal",
        color = "normal",
        lineHeight = "1.5",
        ...restProps
    } = props;

    return React.createElement(
        tag || "span",
        {
            ...restProps,
            className: classNames(
                sizeClass(size),
                weightClass(weight),
                familyClass(family),
                styleClass(textStyle),
                colorClass(color),
                heightClass(lineHeight)
            ),
        },
        children
    );
};

Text.propTypes = {
    tag: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    family: PropTypes.string,
    textStyle: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.any,
    lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
