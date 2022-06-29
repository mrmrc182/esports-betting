import React, { useState, useEffect } from "react";
import "../styles/Matches.css";
import { useQuery } from "@apollo/client";
import { UPCOMING_MATCHES, ME } from "../util/queries";
import MatchCard from "../components/MatchCard";
import moment from 'moment';

export default function Matches() {
  const matchQuery = useQuery(UPCOMING_MATCHES, {
    fetchPolicy: "no-cache",
  });
  console.log(matchQuery.loading, matchQuery.data);

  const meQuery = useQuery(ME, {
    // skip cache for demonstration
    fetchPolicy: "network-only",
  });
  console.log("me", meQuery.loading, meQuery.data);

  return (
    <div className="match-cont">
      <div className="card-cont">
        <div className="card-box">
          <h1 className="match-title">Match-ups</h1>
          <p className="instruct">Click on a matchup to open the betting box</p>

          {matchQuery.loading ? (
            <div className="loading">loading...</div>
          ) : (

            matchQuery.data.upcomingMatches.map((match, index) => (
              <MatchCard
                key={index}
                liveUrl={match.liveUrl}
                matchId={match.matchId}
                teamAName={match.teamAName}
                teamAId={match.teamAId}
                teamBName={match.teamBName}
                teamBId={match.teamBId}
                teamAUrl={match.teamAUrl}
                teamBUrl={match.teamBUrl}
                date={moment(match.date).utc().format('MMMM Do, h:mm a')}
                userId={meQuery.data.me._id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
