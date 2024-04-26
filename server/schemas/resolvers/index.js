const authQueries = require("./auth");
const classQueries = require("./classes");

module.exports = {
  Query: {
    ...authQueries.Query,
    ...classQueries.Query,
  },
  Mutation: {
    ...authQueries.Mutation,
    ...classQueries.Mutation,
  },
};
