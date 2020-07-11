import * as yup from "yup";

export const validationSchema = yup.object({
    email: yup.string().email().required(),
    message: yup.string().min(30).required(),
});
