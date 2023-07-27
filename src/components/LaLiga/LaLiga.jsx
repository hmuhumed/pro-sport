import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import "./LaLiga.css"

function LaLiga() {

    const laLiga = useSelector((store) => store.laLigaReducer)
    const ligaFixtures = useSelector((store) => store.ligaFixturesReducer)
    const dispatch = useDispatch();
    const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "FETCH_LALIGA",
    })
     dispatch({
      type: "FETCH_LIGAFIXTURES"
    })
  }, []);

 

  return (
    <Container maxWidth="xl">
        <br />
        <Typography variant="h3" sx={{textAlign: "center"}}><img src={ligaFixtures[0]?.league.logo}/> La Liga Santander</Typography>
        <br/>
      <Typography>
        La Liga, or the Liga Nacional de Fútbol Profesional, is the top
        professional football league in Spain. Renowned for its rich history and
        exceptional quality of play, La Liga showcases some of the world's most
        talented footballers and iconic clubs like Real Madrid and Barcelona.
        With a passionate fan base and intense rivalries, the league
        consistently delivers thrilling matches and fierce competition. La Liga
        has produced numerous footballing legends and continues to be a
        powerhouse in European football, captivating fans worldwide with its
        captivating style of play.
      </Typography>
      <br />

      <Typography variant="h3" sx={{textAlign: "center"}}>Standings</Typography>
        <br />
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
                {laLiga.map((position , i) => (
                    <tr key={i}>
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
      <br />
      <Typography variant="h3" sx={{textAlign: "center"}}>Recent Fixtures</Typography>
      {ligaFixtures?.map((game, i) => (
        <Typography key={i} className="fixtures"> <img src={game.teams.home.logo} className="image" />  {game.teams.home.name} {game.score.fulltime.home} - {game.score.fulltime.away} <br /> <img src={game.teams.away.logo} className="image" /> {game.teams.away.name}</Typography>
      ))}
      <br />
      <br />
    </Container>
  );
}

export default LaLiga;
