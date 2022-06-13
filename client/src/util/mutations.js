import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const PLACE_BET = gql`
  mutation PlaceBet($userId: String!, $choice: Int!, $matchId: Int!, $amount: Int!, $teamA: String!, $teamB: String!, $choiceName: String!) {
    placeBet(userId: $userId, choice: $choice, matchId: $matchId, amount: $amount, teamA: $teamA, teamB: $teamB, choiceName: $choiceName) {
      _id
      userId
      choice
      matchId
      amount
      teamA
      teamB
      choiceName
    }
  }
`;
