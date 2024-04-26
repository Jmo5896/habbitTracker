const authTypeDefs = require("./auth");
const characterTypeDefs = require("./characters");
const classTypeDefs = require("./classes");

const types = [
  authTypeDefs.types,
  characterTypeDefs.types,
  classTypeDefs.types,
];
const queries = [authTypeDefs.queries, classTypeDefs.queries];
const mutations = [authTypeDefs.mutations, classTypeDefs.mutations];
module.exports = `
${types.join("\n\n")}

type Query {
    ${queries.join("\n")}
}

type Mutation {
    ${mutations.join("\n")}
}
`;
