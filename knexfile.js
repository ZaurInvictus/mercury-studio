const prodDbConnection = process.env.DATABASE_URL;
require("dotenv").config();

module.exports = {
  // SQLITE
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/mercury.db3",
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
    },
  },

  // POSTGRE SQL
  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: prodDbConnection,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  // SQLITE
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/tester.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
