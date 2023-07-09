import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './Bookmarks.css'
import BookmarkItem from "../BookmarkItem/BookmarkItem";
import {Container , Grid} from "@mui/material"
// import { callApi } from "../../../server/modules/api.cache";

function Bookmarks() {
  const player = useSelector((store) => store.playerReducer);
  const bookmarks = useSelector((store) => store.bookmarkReducer);
  console.log('This is bookmarks:', bookmarks);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const [comment , setComment] = useState('')
  const [click , setClick] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'FETCH_BOOKMARK' 
    });
  }, []);

  const handleDelete = (bookmark) => {
    dispatch({
        type: "DELETE_BOOKMARK",
        payload: bookmark
    })
  }

  const handleClick = ( ) => {
    // const playerId = bookmarks.find(player => bookmarks.id === bookmarks[0].id)
    
  }
  const handleUpdate = () =>{
    dispatch({type: "UPDATE_COMMENT" , payload: comment})
  }
  

  return (
    <>

      <h2 className="bookmarks-header">Bookmarks</h2>
      <Container 
      maxWidth="xl" 
      // sx={{display: "flex" , flexDirection: "row", justifyContent: "center"}}
      
      >
      <Grid container 
      spacing={1} >
        { bookmarks ? bookmarks?.map((bookmark) => (
            <Grid item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={3} >
            <BookmarkItem bookmark={bookmark} />
            </Grid>
        //   <div key={bookmark.id} className="player-card">
        //     <p><img src={bookmark.player?.photo} alt="" /></p>
        //     <p>Name: {bookmark.player?.name}</p>
        //     <p>Club Name: {bookmark.stats?.team.name}</p>
        //     <p>Position: {bookmark.stats?.games.position}</p>
        //     <p>Goals: {bookmark.stats?.goals.total}</p>
        //     <p>Assist: {bookmark.stats?.goals.assists}</p>

        //     { !click ? 
        //     <p onClick={handleClick}> Comments: {bookmark.comments} <br /></p>
        //     : 
        //     <>

        //     <input name={bookmark.player.name} placeholder={bookmark.comments} value={comment} onChange={(e) => setComment(e.target.value)}
        //     />
        //     <button onClick={handleUpdate}>Submit</button>
        //     </>
            
        //     }
            
        //      <button onClick={() => setClick(!click)}>Edit</button> <br /> 
        //       <button onClick={() => handleDelete(bookmark.id)}>Delete</button>
        //   </div>

        )) : <p>Loading...</p>}

        </Grid>

      </Container>
      
      {/* <button onClick={() => history.push(`/squads/${bookmarks.id}`)}>Back</button> */}
    </>
  );
}

export default Bookmarks;
