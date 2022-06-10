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
