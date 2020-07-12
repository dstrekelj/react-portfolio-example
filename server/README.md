# react-portfolio-example/server

## Getting started

### Requirements

-   Node 12.18.1
-   NPM 6.14.5

### First steps

1. `git clone git@github.com:dstrekelj/react-portfolio-example.git` (or download the latest [release](https://github.com/dstrekelj/react-portfolio-example/releases))
2. `cd server`
3. `npm install`
4. `npm run dev`

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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
