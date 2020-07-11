import { setIn } from "final-form";

// @see https://gist.github.com/manzoorwanijk/5993a520f2ac7890c3b46f70f6818e0a
export const validateFinalFormValues = (schema) => async (values) => {
    if (typeof schema === "function") {
        schema = schema();
    }
    try {
        await schema.validate(values, { abortEarly: false });
    } catch (err) {
        const errors = err.inner.reduce((formError, innerError) => {
            return setIn(formError, innerError.path, innerError.message);
        }, {});

        return errors;
    }
};
