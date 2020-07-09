import "./RequestStatusIndicator.style.scss";

import React from "react";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";

const statusToIcon = {
    pending: "🤔",
    success: "🥳",
    failure: "😬",
};

export const RequestStatusIndicator = ({ status }) => {
    const transitions = useTransition(status, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return (
        <span className="request-status-indicator">
            {transitions.map((transition) => (
                <animated.span
                    key={transition.key}
                    style={transition.props}
                    className="request-status-indicator__icon"
                >
                    {statusToIcon[transition.item]}
                </animated.span>
            ))}
        </span>
    );
};

RequestStatusIndicator.propTypes = {
    status: PropTypes.string,
};
