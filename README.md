# WebApp

A minimal framework for building a modern fullstack single page app.

- [ReactJS](https://facebook.github.io/react/)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](https://github.com/reactjs/redux)
- [ExpressJS](https://expressjs.com/)
- [SequelizeJS](http://docs.sequelizejs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

Install all dependencies.

```
$ yarn install
```

Run the development server with hot reloading.

```
$ yarn dev
```

Build the project for production

```
$ yarn build
```

Run the production server

```
$ yarn start
```

The app will then be running on http://localhost:3000

`yarn dev` uses a library called [nodemon](https://github.com/remy/nodemon) to run the server for development. This enables the server to restart after each change, rather than doing it manually.

This project begins as a simple todo app in order to provide a basic boilerplate on which to base your project. As you work on your project you will want to update api resources `server/api/v1`, tests `test/, server/test` and react/redux components `client/components, client/actions, client/reducers`.

## Working with a database

This project uses [sequelizejs](http://docs.sequelizejs.com/) as the ORM. In order to create models, migrations and seeds, you will need to install the [sequelize-cli](https://github.com/sequelize/cli) library globally to your development machine. You can find all the commands to work with the library on the `sequelize-cli` repo [https://github.com/sequelize/cli](https://github.com/sequelize/cli)

To configure sequelize for your own database, modify the config.json file located at `server/db/config/config.json`

## Adding a new API route

To create a new api resource, first create a model using `sequelize-cli`, then copy the `todos` folder in `server/api/v1/todos` and rename it to whatever the plural for your model is called. For example, if you created a `User` model, then copy the `todos` folder to `server/api/v1/users` and update the `index.js` file.

If eventually, you'd like to create a `v2` API, all you need to do is copy `server/api/v1` to the same folder, rename it to `v2`, then update `server/api/index.js` to include `v2` rather than `v1`.

## Creating routes

For the client side react app, I've used [react-router](https://reacttraining.com/react-router/) v4. This has some fairly major changes over previous version so it's highly recommended to look over the changes if you are used to previous versions.

## Testing

`$ yarn test` runs the test suite from `server/test`.

You can define unit tests inside `server/test/models` then require them in `server/test/index.js`

## Building for production

To get the app ready for production, you will need to run `yarn build` to create the `bundle.js` file. Then you need to migrate the database for production specifying the `NODE_ENV`.

```
$ NODE_ENV=production sequelize db:migrate
$ NODE_ENV=production sequelize db:seed:all
```

Once the database is migrated and seeded, run `yarn start` to start the production server.

## Developing

I'd like to keep this project fairly minimal to allow it to be flexible enough for any single page application project. However I'm sure optimisations and better ways of doing things will be found. If you'd like to help develop the project please feel free to submit a pull request with your changes.

The main two components of the app are the `client` and `server`.

The `client` is a basic ReactJS app with Redux bindings for state management. The `server` is a minimal REST API with sequelize as the ORM.