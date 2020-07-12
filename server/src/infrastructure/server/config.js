const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
    path: path.resolve(__dirname, "../../../.env"),
});

const config = {
    port: process.env.APP_SERVER_PORT || 3000,
};

module.exports = config;
