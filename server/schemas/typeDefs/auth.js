module.exports = {
  types: `
  type User {
    _id: ID!
    email: String!
    profileImg: String
    admin: Boolean!
    createdAt: String
    characters: [Character]
  }

  type Auth {
    token: ID!
    user: User
  }
`,
  queries: `
    me: User
    `,

  mutations: `
login(email: String!, password: String!): Auth
addUser(email: String!, password: String!): Auth
`,
};
