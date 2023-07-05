import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./Squad.css";
// import squadReducer from "../../redux/reducers/squad.reducer";
import PlayerItem from "../PlayerItem/PlayerItem";

function Squad() {
  const squad = useSelector((store) => store.squadReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  // const [comment , setComment] = useState('');

  useEffect(() => {
    dispatch({
      type: "FETCH_SQUAD",
      payload: params.id,
    });
  }, [params.id]);

//   const bookmark = () => {
//     dispatch({
//         type: "POST_BOOKMARK",
//         payload: 
//     })
// }

  return (
    <>
      <h2>{squad[0]?.statistics[0]?.team.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Photo</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {squad?.map((player, i) => (
            <PlayerItem player={player} key={player.id}/>
            // <tr key={i}>
            //   <td onClick={() => history.push(`/player/${player.player.id}`)}>
            //     {player.player.firstname} {player.player.lastname}
            //   </td>
            //   <td>{player.player.age}</td>
            //   <td>{player.statistics[0].games.position}</td>
            //   <td>
            //     <img src={player.player.photo} className="player-img" alt="" />
            //   </td>
            //   <td> <input type="text" value={comment} placeholder="Comment about player.." onChange={(e) => setComment(e.target.value)}/> </td>
            //   <td>
            //     <Link to={`/bookmarks/${player.player.id}`} >
            //     <button onClick={() => dispatch({type:'POST_BOOKMARK', payload: {player: player.player.id , comment: comment}})}>
            //       <svg
            //         xmlns="http://www.w3.org/2000/svg"
            //         fill="none"
            //         viewBox="0 0 24 24"
            //         strokeWidth="2"
            //         stroke="currentColor"
            //         aria-hidden="true"
            //         >
            //         <path
            //           strokeLinecap="round"
            //           strokeLinejoin="round"
            //           d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            //           ></path>
            //       </svg>
            //       Add Bookmark
            //     </button>
            //   </Link>
            //   </td>
            // </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={() => history.push('/league')}>Back</button>
    </>
  );
}

export default Squad;
