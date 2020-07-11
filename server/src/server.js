const express = require("express");
const schema = require("./contact.validation");
const { Serializer, Error } = require("jsonapi-serializer");
const uuid = require("uuid").v4;
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const app = express();

const config = {
    port: process.env.APP_SERVER_PORT || 3000,
};

app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.get("/ping", (req, res) => {
    res.json({ message: "pong" });
});

app.post(
    "/API/contact",
    async (req, res, next) => {
        try {
            await schema.validate(req.body, { abortEarly: false });
            return next();
        } catch (error) {
            const errorSerializer = new Error(
                error.inner.map((e) => ({
                    id: uuid(),
                    status: "422",
                    title: e.name,
                    detail: e.message,
                    meta: {
                        name: e.path,
                        message: e.message,
                    },
                }))
            );
            return res
                .status(422)
                .type("application/vnd.api+json")
                .json(errorSerializer);
        }
    },
    (req, res) => {
        const messageSerializer = new Serializer("messages", {
            pluralizeType: false,
            attributes: ["message"],
        });

        const response = messageSerializer.serialize({
            id: uuid(),
            message: "Your message has been sent!",
        });

        res.status(200).type("application/vnd.api+json").json(response);
    }
);

module.exports = {
    app,
    config,
};
