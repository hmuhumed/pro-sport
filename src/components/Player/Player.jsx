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

    useEffect(() => {
        dispatch({
            type: "FETCH_PLAYER",
            payload: params.id
        })
        
    }, [params.id]);

    const handleBookmark = () => {

    }
   

    
    return (
        <>
        <div className="players-page" style={{fontWeight:'bold'}}>
        <div className="player-cards">
            <div className="centered-content">
            {players.map((athlete , i) => (
                <>
                <h2>{athlete.statistics[0].team.name}'s {athlete.statistics[0].games.position}</h2>
                <br />
                <div className="player-image">
                <img  className="player-image" src={athlete.player.photo}/>
                </div>
                </>
            ))}

            
            {players.map((athlete , i) => (
                    <div className="player-bio">
                    <table>
                        <tbody>
                            <tr>
                                <td><p>Name: {athlete.player.name}</p></td>
                            </tr>
                            <tr>
                                <td><p>Age: {athlete.player.age}</p></td>
                            </tr>
                            <tr>
                                <td><p>Nationality: {athlete.player.nationality}</p></td>
                            </tr>
                            <tr>
                                <td><p>Height: {athlete.player.height}</p></td>
                            </tr>
                            <tr>
                                <td><p>Weight: {athlete.player.weight}</p></td>
                            </tr>
                    <br />
                        </tbody>
                    </table>
                    </div>
                
            ))}
            <h1 className="stats-header" >Stats</h1>
            {players.map((athlete, i) => (
                <>
                <div className="player-stats">
                    <table>
                        <tbody>
                            <tr>
                                <td><p>Appearence: {athlete.statistics[0].games.appearences}</p></td>
                            </tr>
                            <tr>
                                <td><p>Minutes Played: {athlete.statistics[0].games.minutes}</p></td>
                            </tr>
                            <tr>
                                <td><p>Goals: {athlete.statistics[0].goals.total}</p></td>
                            </tr>
                            <tr>
                                <td><p>Passes: {athlete.statistics[0].passes.total}</p></td>
                            </tr>
                            <tr>
                                <td><p>Pass Accuracy: {athlete.statistics[0].passes.accuracy}%</p></td>
                            </tr>
                            <tr>
                                <td><p>Key Passes: {athlete.statistics[0].passes.key}</p></td>
                            </tr>
                            <tr>
                                <td><p>Tackles: {athlete.statistics[0].tackles.total}</p></td>
                            </tr>
                            <tr>
                                <td><p>Blocks: {athlete.statistics[0].tackles.blocks}</p></td>
                            </tr>
                            <tr>
                                <td><p>Interception: {athlete.statistics[0].tackles.interceptions}</p></td>
                            </tr>
                            <tr>
                                <td><p>Duels: {athlete.statistics[0].duels.total} | Won {athlete.statistics[0].duels.won} </p></td>
                            </tr>
                            <tr>
                                <td><p>Dribbles: Attempts {athlete.statistics[0].dribbles.attempts} | Success {athlete.statistics[0].dribbles.success}</p></td>
                            </tr>
                            <tr>
                                <td><p>Penalties: Scored {athlete.statistics[0].penalty.scored} | Missed {athlete.statistics[0].penalty.missed}</p></td>
                            </tr>
                    <br />
                        </tbody>
                    </table>
                </div>
               
                <button onClick={() => history.push(`/squads/${athlete.statistics[0].team.id}`)}>Back</button>
                </>
            ))}</div></div></div>

            
        </>


    )
}

export default Player;