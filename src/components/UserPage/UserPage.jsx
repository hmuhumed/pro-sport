import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import "./UserPage.css";
import { useHistory } from "react-router-dom";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const history = useHistory()

  const getStartedButton = () => {
    history.push('/league')
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />

      <h1 className="intro">Introduction To Soccer</h1>
      <p>
        Soccer, also known as football, is a team sport played on a rectangular
        field. The objective is to score goals by kicking the ball into the
        opponent's net. Players use their feet, legs, and heads to control and
        pass the ball. It's a game of skill, teamwork, and strategy, enjoyed by
        millions worldwide.
      </p>
      <br />
      <iframe
        className="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Phnt5QZ7X7o"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <br />
      <h4>Are you ready to get started?</h4>
      <button className="Started" onClick={() => getStartedButton()}>Get Started</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
