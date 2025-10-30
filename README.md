# Realtime Chats Monorepo
Thank you for Having interest in this repository ! A monorepo of realtime chats project — API, Data Model, Migrations, Packages and all the things.

This project is built with NodeJS, Express, MongoDB, Socket.io and React. it provides a real-time chat application with features like user authentication, chat rooms, and message history and it uses WebSockets to enable real-time communication between users. For data storage, it utilizes a database to store user information and chat messages.

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

1. Set up Environment Variables in root and client: rename the `.env.example` file to `.env` and fill in the required environment variables such as database connection strings, API keys, and other configurations.
2. Start App: Use the command below to start concurrently the development server & client.
```sh
yarn dev
```

If you have problem, feel free to ask me [micaeldie@gmail.com](mailto:micaeldie@gmail.com)
