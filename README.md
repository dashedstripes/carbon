# WebApp

A minimal framework for building a modern fullstack app.

- [ExpressJS](https://expressjs.com/)
- [SequelizeJS](http://docs.sequelizejs.com/)
- [ReactJS](https://facebook.github.io/react/)

## Getting Started

```
$ yarn install
$ yarn start
```

The app will then be running on http://localhost:3000

`$ yarn start` uses a library called [nodemon](https://github.com/remy/nodemon) to run the server for development. This enables the server to restart after each change, rather than doing it manually.

## Working with a database

This project uses [sequelizejs](http://docs.sequelizejs.com/) as the ORM. In order to create models, migrations and seeds, you will need to install the [sequelize-cli](https://github.com/sequelize/cli) library globally to your development machine. You can find all the commands to work with the library on the `sequelize-cli` repo [https://github.com/sequelize/cli](https://github.com/sequelize/cli)

To configure sequelize for your own database, modify the config.json file located at `server/db/config/config.json`

## Adding a new API route

To create a new api resource, copy the `todos` folder in `server/api/v1/todos` and rename it to whatever your resource is called. For example, to create a `users` resource, copy the folder to `server/api/v1/users` then update the `index.js` file.