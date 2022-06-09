const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    "Find the logged in user."
    me: User
    upcomingMatches: [Match]
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(username: String!, password: String!): Auth
  }

  type Auth {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    lastLogin: Date!
  }

  type Match {
    _id: ID!
    date: Date!
    teamAName: String
    teamAId: Int
    teamAUrl: String
    teamBName: String
    teamBId: Int
    teamBUrl: String
  }
`;

module.exports = typeDefs;
