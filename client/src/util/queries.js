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
      teamA
      teamB
      choiceName
      open
    }
  }
`;

export const OPEN_BETS = gql`
  query openBets {
    openBets {
      userId
      amount
      choice
      matchId
      teamA
      teamB
      choiceName
      open
    }
  }
`;

export const CLOSED_BETS = gql`
  query closedBets {
    closedBets {
      userId
      amount
      choice
      matchId
      teamA
      teamB
      choiceName
      open
    }
  }
`;

export const CURRENCY = gql`
  query currency {
    currency {
      userId
      amount
    }
  }
`;

export const LEADERBOARD = gql`
  query leaderboard {
    leaderboard {
      username
      amount
    }
  }
`;

export const RANK = gql`
  query rank {
    rank {
      username
      amount 
      rank
    }
  }
`;
