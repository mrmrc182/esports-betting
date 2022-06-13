import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      _id
      lastLogin
      username
      email
    }
  }
`;

export const UPCOMING_MATCHES = gql`
  query upcomingMatches {
    upcomingMatches {
      matchId
      liveUrl
      date
      teamAName
      teamAId
      teamAUrl
      teamBName
      teamBId
      teamBUrl
    }
  }
`;

export const BETS = gql`
  query bets {
    bets {
      userId
      amount
      choice
      matchId
    }
  }
`;
