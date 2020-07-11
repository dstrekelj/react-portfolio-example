const yup = require("yup");

module.exports = yup.object({
    email: yup.string().email().required(),
    message: yup.string().min(30).required(),
});
