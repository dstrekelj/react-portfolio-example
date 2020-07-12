const { Router } = require("express");
const input = require("./contact.input");
const output = require("./contact.output");

const router = Router();

router.post(
    "/contact",
    async (req, res, next) => {
        try {
            await input.validate(req.body);

            return next();
        } catch (error) {
            return res
                .status(422)
                .type("application/vnd.api+json")
                .json(output.failure(error));
        }
    },
    async (req, res) => {
        return res
            .status(200)
            .type("application/vnd.api+json")
            .json(output.success());
    }
);

module.exports = router;
