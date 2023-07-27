import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import './Player.css'
import {Card, CardContent, CardMedia, Typography, Button, TextField} from '@mui/material'

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
        {/* <div className="players-page" style={{fontWeight:'bold'}}> */}
        <Card elevation={30} >
            <CardContent>   
        {/* <div className="player-cards"> */}
            <div className="centered-content">
            {players.map((athlete , i) => (
                <>
                <br />
                <br />
                <CardContent>
                <Typography variant="h4">{athlete.statistics[0].team.name}'s {athlete.statistics[0].games.position}</Typography>
                <br />
                
                <CardMedia component="img" image={athlete.player.photo} sx={{height: 150, objectFit: "contain"}}/>
                </CardContent>
               
                </>
            ))}

            
            {players.map((athlete , i) => (
                    <div className="player-bio">
                    <table>
                        <tbody>
                            
                                <Typography
                                 >{athlete.player.name}
                                </Typography>
                            
                           
                                <Typography> Age: {athlete.player.age}</Typography>
                            
                            
                                <Typography>Nationality: {athlete.player.nationality}</Typography>
                            
                            
                                <Typography><p>Height: {athlete.player.height}</p></Typography>
                            
                            
                                <Typography><p>Weight: {athlete.player.weight}</p></Typography>
                            
                    <br />
                        </tbody>
                    </table>
                    </div>
                
            ))}
            <Typography variant="h4" >Stats</Typography>
            {players.map((athlete, i) => (
                <>
                <div className="player-stats">
                    <table>
                        <tbody>
                            
                                <Typography><p>Appearence: {athlete.statistics[0].games.appearences}</p></Typography>
                            
                            
                                <Typography><p>Minutes Played: {athlete.statistics[0].games.minutes}</p></Typography>
                            
                                <Typography><p>Goals: {athlete.statistics[0].goals.total}</p></Typography>
                            
                           
                                <Typography><p>Passes: {athlete.statistics[0].passes.total}</p></Typography>
                            
                            
                                <Typography><p>Pass Accuracy: {athlete.statistics[0].passes.accuracy}%</p></Typography>
                           
                        
                                <Typography><p>Key Passes: {athlete.statistics[0].passes.key}</p></Typography>
                            
                            
                                <Typography><p>Tackles: {athlete.statistics[0].tackles.total}</p></Typography>
                            
                            
                                <Typography><p>Blocks: {athlete.statistics[0].tackles.blocks}</p></Typography>
                            
                                <Typography><p>Interception: {athlete.statistics[0].tackles.interceptions}</p></Typography>
                           
                                <Typography><p>Duels: {athlete.statistics[0].duels.total} | Won {athlete.statistics[0].duels.won} </p></Typography>
                         
                                <Typography><p>Dribbles: Attempts {athlete.statistics[0].dribbles.attempts} | Success {athlete.statistics[0].dribbles.success}</p></Typography>
                           
                                <Typography><p>Penalties: Scored {athlete.statistics[0].penalty.scored} | Missed {athlete.statistics[0].penalty.missed}</p></Typography>
                           
                    <br />
                        </tbody>
                    </table>
                </div>
               
                <Button onClick={() => history.push(`/squads/${athlete.statistics[0].team.id}`)}>Back</Button>
                <br />
                </>
            ))}</div></CardContent></Card> 
            {/* </div> */}

            
        </>


    )
}

export default Player;