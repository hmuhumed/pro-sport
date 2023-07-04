import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import './Player.css'

function Player(){

    const players = useSelector((store) => store.playerReducer)
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    // const [comment , setComment] = useState('');

    useEffect(() => {
        dispatch({
            type: "FETCH_PLAYER",
            payload: params.id
        })
        
    }, [params.id]);

    const handleBookmark = () => {

    }
   

    // const id = players.statistics.find((team) => team.team.id)
    // const squad = useSelector((store) => store.squadReducer.find((squad) => squad.id == params.id))
    return (
        <>
            {players.map((athlete , i) => (
                <div className="player-image">
                <img src={athlete.player.photo}/>
                </div>
            ))}

            
            {players.map((athlete , i) => (
                <div className="player-bio">
                <p>Name: {athlete.player.name}</p>
                <p>Age: {athlete.player.age}</p>
                <p>Nationality: {athlete.player.nationality}</p>
                <p>Height: {athlete.player.height}</p>
                <p>Weight: {athlete.player.weight}</p>
                </div>
            ))}
            <h1 className="stats-header" >Stats</h1>
            {players.map((athlete, i) => (
                <>
                <div className="player-stats">
                    <p>Appearence: {athlete.statistics[0].games.appearences}</p>
                    <p>Minutes Played: {athlete.statistics[0].games.minutes}</p>
                    <p>Goals: {athlete.statistics[0].goals.total}</p>
                    <p>Passes: {athlete.statistics[0].passes.total}</p>
                    <p>Pass Accuracy: {athlete.statistics[0].passes.accuracy}%</p>
                    <p>Key Passes: {athlete.statistics[0].passes.key}</p>
                    <p>Tackles: {athlete.statistics[0].tackles.total}</p>
                    <p>Blocks: {athlete.statistics[0].tackles.blocks}</p>
                    <p>Interception: {athlete.statistics[0].tackles.interceptions}</p>
                    <p>Duels: {athlete.statistics[0].duels.total} | Won {athlete.statistics[0].duels.won} </p>
                    <p>Dribbles: Attempts {athlete.statistics[0].dribbles.attempts} | Success {athlete.statistics[0].dribbles.success}</p>
                    <p>Penalties: Scored {athlete.statistics[0].penalty.scored} | Missed {athlete.statistics[0].penalty.missed}</p>

                </div>
                <button onClick={() => history.push(`/squads/${athlete.statistics[0].team.id}`)}>Back</button>
                </>
            ))}

            
        </>


    )
}

export default Player;