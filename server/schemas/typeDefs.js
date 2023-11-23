const typeDefs = `
  type User {
    _id: ID!
    email: String!
    habits: [Habit]
    createdAt: String
  }

  type Habit {
    _id: ID!
    title: String!
    description: String
    increase_decrease: Boolean
    createdAt: String
    tallyCount: Int
    tally: [Tally]
  }

  type Tally {
    _id: ID
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
