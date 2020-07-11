import "./Copyright.style.scss";

import React from "react";
import { Text } from "../Text";

export const Copyright = () => {
    const year = new Date().getFullYear();

    return (
        <small className="copyright">
            <Text tag="span" size="small" color="dimmed" textStyle="italic">
                &copy; {year} Jane Cooper
            </Text>
        </small>
    );
};
