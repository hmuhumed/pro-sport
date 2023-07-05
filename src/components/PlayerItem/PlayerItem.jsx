import { useHistory , Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function PlayerItem({player}){

    const [comment , setComment] = useState('');
    const dispatch  = useDispatch()
    const history = useHistory();

    const handleBookmark = () => {
        dispatch({type:'POST_BOOKMARK', payload: {player: player.player.id , comment: comment}})
        // dispatch({type: 'SET_BOOKMARK' , payload: {comment: comment , player: player.player.id}})
        dispatch({type: "FETCH_BOOKMARK"})
        setComment('');
        history.push(`/bookmarks`)
    }

    // const historyBookmark = () => {
    //   <Link to={`/bookmarks/${player.player.id}`} ></Link>
    // }

    return (
        <>
            <tr>
              <td onClick={() => history.push(`/player/${player.player.id}`)}>
                {player.player.firstname} {player.player.lastname}
              </td>
              <td>{player.player.age}</td>
              <td>{player.statistics[0].games.position}</td>
              <td>
                <img src={player.player.photo} className="player-img" alt="" />
              </td>
              <td> <input type="text" value={comment} placeholder="Comment about player.." onChange={(e) => setComment(e.target.value)}/> </td>
              <td>
                
                <button onClick={() => handleBookmark()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                      ></path>
                  </svg>
                  Add Bookmark
                </button>
              
              </td>
            </tr>
            
        </>
    )
}

export default PlayerItem;