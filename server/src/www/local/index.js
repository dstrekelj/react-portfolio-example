const { server, config } = require("../../infrastructure/server");

const app = server("/");

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
