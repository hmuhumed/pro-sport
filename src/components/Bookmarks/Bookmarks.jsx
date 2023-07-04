import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { callApi } from "../../../server/modules/api.cache";

function Bookmarks(){

    const player = useSelector((store) => store.playerReducer);
    const bookmarks = useSelector((store) => store.bookmarkReducer)
    console.log('This is bookmarks:', bookmarks)
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

  
    
   
  useEffect(() => {
    dispatch({
        type: 'FETCH_BOOKMARK' 
    })
  }, [])
   
    // const players = bookmarks.apiResult?.map((item, i) => {
    //     const playerName = item.response[0].player;
    //     const clubData = item.response[0].statistics[0].team
    // })

    return (
        <>
            <p>Hi</p>
            {bookmarks.map((bookmark) => (
                <div key={bookmark.id}>
                    <p>{bookmark.player?.name}</p>
                    <p>{bookmark.stats?.team.name}</p>
                    <p>{bookmark.comments}</p>
                </div>
            ))}
          

            
            
        </>
    )
}

export default Bookmarks;