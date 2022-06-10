import React, { useState, useEffect } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import "../styles/Matches.css";
import { useQuery } from "@apollo/client";
import { UPCOMING_MATCHES } from "../util/queries";
import MatchCard from "../components/MatchCard";

export default function Matches() {
  const { loading, data } = useQuery(UPCOMING_MATCHES, {
    fetchPolicy: "no-cache",
  });
  console.log(loading, data);

  return (
    <div className="match-cont">
      <h1>Match-ups</h1>

      {loading ? (
        <div>loading...</div>
      ) : (
        data.upcomingMatches.map((match) => <MatchCard title={match.matchId} />)
      )}
    </div>
  );
}
