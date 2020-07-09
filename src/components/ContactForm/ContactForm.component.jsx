import "./ContactForm.style.scss";

import React from "react";
import { Form, Field } from "react-final-form";
//import { FORM_ERROR } from "final-form";
import { CTAElement } from "../CTAElement";
import { TextArea } from "../../components/TextArea";
import { Input } from "../../components/Input";
import { validateFinalFormValues } from "../../utils/validateFinalFormValues";
import { validationSchema } from "./ContactForm.validation";
import { sleep } from "../../utils/sleep";
import { RequestStatusIndicator } from "../RequestStatusIndicator";

const onSubmit = async (values) => {
    await sleep(1000);

    // @todo connect to api
    //return { [FORM_ERROR]: "Something went wrong!" };
};

const onValidate = validateFinalFormValues(validationSchema);

const getRequestStatus = (pending, success, failure) => {
    if (pending) return "pending";
    if (success) return "success";
    if (failure) return "failure";
    return "";
};

export const ContactForm = () => {
    return (
        <Form
            onSubmit={onSubmit}
            validate={onValidate}
            render={({
                submitError,
                handleSubmit,
                form,
                submitting,
                hasValidationErrors,
                submitSucceeded,
            }) => (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <Field name="email">
                        {(props) => (
                            <div className="form-field">
                                <Input
                                    {...props}
                                    type="email"
                                    label="Email"
                                    placeholder="your@email.address"
                                    required
                                />
                            </div>
                        )}
                    </Field>
                    <Field name="message">
                        {(props) => (
                            <div className="form-field">
                                <TextArea
                                    {...props}
                                    label="Message (min. 30 characters)"
                                    placeholder="Hey! What's up?"
                                    required
                                />
                            </div>
                        )}
                    </Field>
                    <div className="form-controls">
                        <div>
                            <CTAElement
                                element={<button />}
                                type="submit"
                                disabled={submitting || hasValidationErrors}
                            >
                                Send
                            </CTAElement>
                            <RequestStatusIndicator
                                status={getRequestStatus(
                                    submitting,
                                    submitSucceeded,
                                    submitError
                                )}
                            />
                        </div>
                        {submitError && (
                            <div className="form-error">{submitError}</div>
                        )}
                        {submitSucceeded && (
                            <div className="form-success">Message sent!</div>
                        )}
                    </div>
                </form>
            )}
        />
    );
};
