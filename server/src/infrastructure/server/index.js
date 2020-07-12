const express = require("express");
const cors = require("cors");
const config = require("./config");
const contact = require("../../modules/contact");

let instance;

function server(apiURL) {
    if (instance) return;

    instance = express();

    instance.use((req, res, next) => {
        res.type("application/vnd.api+json");
        next();
    });
    instance.use(express.json({ type: "application/vnd.api+json" }));
    instance.use(cors());

    const apiRouter = express.Router();

    apiRouter.use("/API", contact);

    instance.use(apiURL, apiRouter);

    return instance;
}

module.exports = {
    server,
    config,
};
