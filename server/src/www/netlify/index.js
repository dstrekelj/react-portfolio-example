const serverless = require("serverless-http");
const { server } = require("../../infrastructure/server");

const app = server("/.netlify/functions/index");

module.exports.handler = serverless(app);
