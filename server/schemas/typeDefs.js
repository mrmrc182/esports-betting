const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    me: User
    upcomingMatches: [Match]
    bets: [Bet]
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    placeBet(userId: String!, choice: Int!, matchId: Int!, amount: Int!, teamA: String!, teamB: String!, choiceName: String!): Bet
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

  type Bet {
    _id: ID!
    userId: String!
    choice: Int!
    matchId: Int!
    amount: Int!
    teamA: String!
    teamB: String!
    choiceName: String!
  }

  type Match {
    matchId: Int
    liveUrl: String
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
// placeBet(userId: String!, choice: Int!, matchId: Int!, amount: Int!): Bet