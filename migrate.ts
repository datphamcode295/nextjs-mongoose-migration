export default {
    uri: process.env.MONGODB_URI,
    collection: "migrations",
    migrationsPath: "./migrations",
    autosync: true,
  };