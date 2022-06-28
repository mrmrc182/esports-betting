const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type Query {
    me: User
    upcomingMatches: [Match]
    bets: [Bet]
    currency: Currency
    leaderboard: [UserValue]
    rank: Rank
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    placeBet(userId: String!, choice: Int!, matchId: Int!, amount: Int!, teamA: String!, teamB: String!, choiceName: String!): Bet
    adjustCurrency(userId: String!, amount: Int!): Currency
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

  type Currency {
    userId: String!
    amount: Int!
  }

  type UserValue {
    username: String!
    amount: Int!
  }

  type Rank {
    username: String!
    amount: Int!
    rank: Int!
  }
`;

module.exports = typeDefs;