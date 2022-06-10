const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    me: User
    upcomingMatches: [Match]
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
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
    matchId: Int
    date: String
    teamAName: String
    teamAId: Int
    teamAUrl: String
    teamBName: String
    teamBId: Int
    teamBUrl: String
  }
`;

module.exports = typeDefs;
