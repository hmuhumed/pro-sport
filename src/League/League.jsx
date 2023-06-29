import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./League.css";

function League() {
  const standings = useSelector((store) => store.leagueReducer);
  const fixtures = useSelector((store) => store.fixturesReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("standings", standings);

  useEffect(() => {
    dispatch({
      // we have a generator function listen in for action type 'FETCH_GENRES' and it will run the function connected with it on the rootSaga
      type: "FETCH_STANDINGS",
    });

    dispatch({
        type: "FETCH_FIXTURES"
    });
  }, []);

 


  return (
    <>
      <h1 className="title">English Premier League</h1>
      <p className="dialogue">
        The English Premier League, often referred to as the EPL, is the top
        professional football league in England. It was established in 1992,
        replacing the old First Division. The league operates on a system of
        promotion and relegation, where the bottom three teams are relegated to
        the second-tier Championship, and the top two teams from the
        Championship are promoted to the Premier League.
      </p>
      <p className="dialogue">
        Since its inception, the Premier League has become one of the most
        popular and competitive football leagues in the world, attracting top
        players and significant global attention. Manchester United has been the
        most successful club, winning the title a record 13 times. Other notable
        clubs include Arsenal, Chelsea, Manchester City, and Liverpool, all of
        whom have enjoyed considerable success in the league.
      </p>
      <p className="dialogue">
        The Premier League's rise to prominence has been fuelled by lucrative TV
        deals, passionate fans, and high-quality football. Its impact on the
        sport's global popularity cannot be understated, making it a powerhouse
        in the world of football.
      </p>
      <h2 className="header">Standings</h2>
      <table className="standings">
        <thead>
          <tr>
            <th>Rank</th>
            <br></br>
            <th>Team</th>
            <br></br>
            <th>Points</th>
            <br></br>
            <th>GD</th>
            <br></br>
            <th>Form</th>
            <br></br>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {standings.map((position, i) => (
            <tr key={i} >
              <td>{position.rank}</td>
              <br></br>
              <td onClick={() => history.push(`/squads/${position.team.id}`)}> <img src={position.team.logo} className="image" /> {position.team.name}</td>
              <br></br>
              <td>{position.points}</td>
              <br></br>
              <td>{position.goalsDiff}</td>
              <br></br>
              <td>{position.form}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <h2 className="recent-fixtures">Recent Fixtures</h2>
      {fixtures?.map((game, i) => (
        <p key={i} className="fixtures">{game.teams.home.name} {game.score.fulltime.home} - {game.score.fulltime.away} {game.teams.away.name}</p>
      ))}
      

    </>
  );
}

export default League;
