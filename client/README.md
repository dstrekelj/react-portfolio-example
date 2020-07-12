# react-portfolio-example/client

## Getting started

### Requirements

-   Node 12.18.1
-   NPM 6.14.5

### First steps

1. `git clone git@github.com:dstrekelj/react-portfolio-example.git` (or download the latest [release](https://github.com/dstrekelj/react-portfolio-example/releases))
2. `cd client`
3. `npm install`
4. Place `.env` (see `.env.example` and [.env](#.env) section)
5. `npm run dev`

## Scripts

### npm run lint

Uses Prettier and ESLint to prettify and lint files with staged changes. Used primarily during the pre-commit hook.

### npm run build

Builds a production-ready asset bundle in the `/build` directory. The contents of that directory are what you want to serve to users.

Also performs a bundle analysis and creates a detailed treemap of the app and its dependencies.

### npm run dev

Starts a webpack-dev-server development environment with HMR.

Also performs a bundle analysis and creates a detailed treemap of the app and its dependencies.

## .env

### APP_CLIENT_PORT

Port the webpack-dev-server will listen on. Defaults to 8080.

### APP_CLIENT_API_URL

Required. URL for the API served by the server app. Example: `http://localhost:3000`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
