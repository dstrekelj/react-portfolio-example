# react-portfolio-example/server

## Getting started

### Requirements

-   Node 12.18.1
-   NPM 6.14.5

### First steps

1. `git clone git@github.com:dstrekelj/react-portfolio-example.git` (or download the latest [release](https://github.com/dstrekelj/react-portfolio-example/releases))
2. `cd server`
3. `npm install`
4. Place `.env` (see `.env.example` and [.env](#.env) section)
5. `npm run dev`

### More information

The API can be explored through the [Firecamp](https://firecamp.io/) collection which is exported to [react-portfolio-example_firecamp.json](./react-portfolio-example_firecamp.json).

Make sure to check that host and port values in API URLs match your development / production setup.

## Scripts

### npm run build

Builds the Express app into a Netlify Functions-compatible serverless app.

The built assets are placed in a folder configured in `netlify.toml` under the `functions` key.

The `netlify-lambda` library is used to build the serverless version of the app. The library itself is a wrapper around a Webpack configuration targeting ES5, ensuring the application code is compatible with the environment the functions will run on.

The entrypoint in this case is `src/www/netlify/index.js`. Every script file at the root of the entrypoint directory will be built into a function, so we're only keeping `index.js` in there as it is currently the entrypoint for the entire application.

### npm run dev

Starts a node-dev development environment.

The entrypoint in this case is `src/www/local/index.js`.

### npm run serve

Serves the application daemon.

The entrypoint in this case is `src/www/local/index.js`.

### npm run serve:stop

Stops the application daemon.

## .env

### APP_SERVER_PORT

Port the Express app will listen on. Defaults to 3000.

### APP_SERVER_SMTP_HOST

SMTP server host. Required for mail transport to work.

### APP_SERVER_SMTP_PORT

SMTP server port. If set to 465 automatically enables secure TLS. Required for mail transport to work.

### APP_SERVER_SMTP_USER

STMP account username. Required for mail transport to work.

### APP_SERVER_SMTP_PASS

STMP account password. Required for mail transport to work.

### APP_SERVER_EMAIL_SENDER

Sender email address used when sending contact form submissions.

### APP_SERVER_EMAIL_RECIPIENT

Recipient email address used when sending contact form submissions.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
