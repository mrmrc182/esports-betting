import { useQuery } from "@apollo/client";
import { Container, Table } from "react-bootstrap";
import { LEADERBOARD, RANK } from "../util/queries";
import "../styles/Leaderboard.css";

export default function Leaderboard() {

  const leaderboardQuery = useQuery(LEADERBOARD, {
    fetchPolicy: "no-cache",
  });
  console.log(leaderboardQuery.loading, leaderboardQuery.data);

  const rankQuery = useQuery(RANK, {
    fetchPolicy: "no-cache",
  });
  console.log(rankQuery.loading, rankQuery.data);

  return (
    <div className="color">
      <br></br>
      <h1 className="leaderboard-title">Leaderboard</h1>
      <br></br>

      <Container className="leaderboard-width">
        <Table striped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Matt</td>
              <td>420</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sam</td>
              <td>182</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Vilas</td>
              <td>69</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Jake</td>
              <td>41</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
