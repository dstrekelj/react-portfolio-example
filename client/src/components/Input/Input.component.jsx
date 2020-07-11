import "./Input.style.scss";

import React from "react";
import { Text } from "../Text";
import classNames from "classnames";

export const Input = ({ input, meta, type, placeholder, label, required }) => {
    const hasError = (meta.error || meta.submitError) && meta.touched;

    return (
        <div className={classNames("input", { error: hasError })}>
            <label className="input__label">
                {label} {required && "*"}
            </label>
            <input
                className="input__control"
                {...input}
                type={type}
                placeholder={placeholder}
                required={required}
            />
            {hasError && (
                <span className="input__error">
                    <Text tag="span" size="small">
                        * {meta.error || meta.submitError}
                    </Text>
                </span>
            )}
        </div>
    );
};
