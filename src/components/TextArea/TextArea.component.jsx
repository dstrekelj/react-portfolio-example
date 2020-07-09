import "./TextArea.style.scss";

import React from "react";
import { Text } from "../Text";
import classNames from "classnames";

export const TextArea = ({ input, meta, placeholder, label, required }) => {
    const hasError = (meta.error || meta.submitError) && meta.touched;

    return (
        <div className={classNames("text-area", { error: hasError })}>
            <label className="text-area__label">
                {label} {required && "*"}
            </label>
            <textarea
                className="text-area__control"
                {...input}
                placeholder={placeholder}
                required={required}
            />
            {hasError && (
                <span className="text-area__error">
                    <Text tag="span" size="small">
                        * {meta.error || meta.submitError}
                    </Text>
                </span>
            )}
        </div>
    );
};
