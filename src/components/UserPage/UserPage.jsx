import React, { useEffect } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./UserPage.css";
import { useHistory } from "react-router-dom";
import {Card , CardContent, CardMedia , Typography, Button, TextField} from '@mui/material'


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory()

 
  const getStartedButton = () => {
    history.push('/league')
  }

  return (
    <Card>
      <CardContent>
      <div className="container">
      <Typography>Welcome, {user.username}!</Typography>
     
      

      <Typography variant="h2">Introduction To Soccer</Typography>
      <Typography>
        Soccer, also known as football, is a team sport played on a rectangular
        field. The objective is to score goals by kicking the ball into the
        opponent's net. Players use their feet, legs, and heads to control and
        pass the ball. It's a game of skill, teamwork, and strategy, enjoyed by
        millions worldwide.
      </Typography>
      <br />
      <div className="embeded-vid">
        <Card>
          <video
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Phnt5QZ7X7o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          />
        </Card>
      <iframe
       
      ></iframe></div>
      <br />
      <h4>Are you ready to get started?</h4>
      <Button className="Started" onClick={() => getStartedButton()}>Get Started</Button>
      {/* <button></button> */}
    </div>
    </CardContent>
    </Card>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
