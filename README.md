# WebApp

A minimal framework for building a modern fullstack single page app.

## Getting Started

This project uses Docker to make it simple to get started.

## Configure the database

Edit `server/db/config/config.json` so that the database name for each environment matches your project name. As a rule of thumb, dev and test databases should be `yourproject_dev` and `yourproject_test` respectively.

## Create the container

```
$ docker-compose up
```

## Create and seed the database

```
$ docker-compose exec db psql -U postgres
$ create database yourproject_dev; \q
$ docker-compose exec web sequelize db:migrate
$ docker-compose exec web sequelize db:seed:all
```

The app should now be running at `http://localhost:3000`

## Working with the ORM

This project uses [sequelizejs](http://docs.sequelizejs.com/) to create models, migrations, and seeds.

To run sequelize commands on your running container, you will need to prefix each command with:

```
$ docker-compose exec web [your command here]
```

## Creating a new API resource

First create a model using `sequelize-cli`. Then, copy the `todos` folder in `server/api/v1/todos` and rename it to whatever the plural for your model is called. For example, if you created a `User` model, then copy the `todos` folder to `server/api/v1/users` and update the `index.js` file.

If eventually, you'd like to create a `v2` API, all you need to do is copy `server/api/v1` to the same folder, rename it to `v2`, then update `server/api/index.js` to include `v2` rather than `v1`.

## Creating routes

For the client side react app, I've used [react-router](https://reacttraining.com/react-router/) v4. This has some fairly major changes over previous version so it's highly recommended to look over the changes if you are used to previous versions.

## Run Tests

You will first need to create your test database.

```
$ docker-compose exec db psql -U postgres
$ create database yourproject_test; \q
```

Then, you can run the test suite with:

```
$ docker-compose exec web yarn test
```

You can define unit tests inside `server/test/models` then require them in `server/test/index.js`.

## Building for production (Docker)

To run the app in production using docker, install docker on your web server and run:

```
$ docker-compose -f production.yml up -d
```

In a separate shell, create your production database.

```
$ docker-compose exec db psql -U postgres
$ create database yourproject; \q
$ docker-compose exec web sequelize db:migrate
$ docker-compose exec web sequelize db:seed:all
```

The app should now be running at `http://localhost:3000`

## Developing

I'd like to keep this project fairly minimal to allow it to be flexible enough for any single page application project. However I'm sure optimisations and better ways of doing things will be found. If you'd like to help develop the project please feel free to submit a pull request with your changes.

The main two components of the app are the `client` and `server`.

The `client` is a basic ReactJS app with Redux bindings for state management. The `server` is a minimal REST API with sequelize as the ORM.