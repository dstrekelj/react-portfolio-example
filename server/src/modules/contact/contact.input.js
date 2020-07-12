const { object, string } = require("yup");

const schema = object({
    email: string().email().required(),
    message: string().min(30).required(),
});

async function validate(body) {
    try {
        await schema.validate(body, { abortEarly: false });

        return body;
    } catch (error) {
        throw error;
    }
}

module.exports.validate = validate;
