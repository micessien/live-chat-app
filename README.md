# Realtime Chats Monorepo
Thank you for Having interest in this repository ! A monorepo of realtime chats project — API, Data Model, Migrations, Packages and all the things

## Setting up your development environment

### Pre-reqs

You need [NodeJS >= 19](https://nodejs.org/en/about). You also need to install [yarn](https://classic.yarnpkg.com/en/docs/install) if you don't have it already:

> If you already have yarn, make sure it's version `1.22.22` or later

```sh
npm install --global yarn
```

### Installation

After cloning the repository, follow the steps below:

Install dependencies inside the root directory (Download Server Dependencies):
```sh
yarn install
```

Install dependencies inside the client directory (Download Front-end Dependencies):
```sh
yarn install
```

After installing dependencies, follow the steps below:

1. Set up Environment Variables: rename the `.env.example` file to `.env` and fill in the required environment variables such as database connection strings, API keys, and other configurations.
2. Create `dev.js` file inside config folder. Ensure you have a running instance of the database specified in your `dev.js` from environment variables. Create the necessary databases and run any required migrations or seed scripts.
3. Start App: Use the command below to start the development server.
```sh
yarn dev
```

If you have problem, feel free to ask me [micaeldie@gmail.com](mailto:micaeldie@gmail.com)
