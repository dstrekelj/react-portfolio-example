const { app, config } = require("./src/server");

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
