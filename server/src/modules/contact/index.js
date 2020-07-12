const { Router } = require("express");
const input = require("./contact.input");
const output = require("./contact.output");
const controller = require("./contact.controller");

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
        try {
            await controller.sendMail(req.body);

            return res
                .status(200)
                .type("application/vnd.api+json")
                .json(output.success());
        } catch (error) {
            return res
                .status(500)
                .type("application/vnd.api+json")
                .json(output.failure(error));
        }
    }
);

module.exports = router;
