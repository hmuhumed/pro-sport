import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import './BookMarkItem.css';
import {Card , CardContent, CardMedia , Typography, Button, TextField} from '@mui/material'

function BookmarkItem({bookmark}){

  const dispatch = useDispatch();

    const [comment , setComment] = useState('')
    const [click , setClick] = useState(false);

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
        dispatch({type: "UPDATE_COMMENT" , payload: {comment: comment , id: bookmark.id}})
        console.log("This is comments from handleUpdate:", comment)

        setClick(!click);
      }

    return (
        <>
            <Card key={bookmark.id} 
            sx={{maxWidth: 500, mx: 3, my: 5}}
            elevation={6}
            
            >
              <CardContent>
                <CardMedia component="img" image={bookmark.player?.photo} 
                sx={{height: 150, objectFit: "contain"}}
                />
                <Typography variant="h5" align="center" sx={{mt: 3}}>
                     {bookmark.player?.name}

                </Typography>
              </CardContent>
              <CardContent  >
                
                <CardMedia component="img" image={bookmark?.stats?.team.logo} sx={{height: 100, objectFit: "contain"}} />
                <Typography variant="h5" align="center" sx={{mb: 3}}>
                    {bookmark.stats?.team.name}
                </Typography>
                <Typography>
                    Position: {bookmark.stats?.games.position}
                </Typography>
                <Typography>
                    Goals: {bookmark.stats?.goals.total}
                </Typography>
                <Typography>
                    Assist: {bookmark.stats?.goals.assists}
                </Typography>
              </CardContent>
              <CardContent>
              { !click ? 
            <Typography onClick={handleClick}> Comments: {bookmark.comments} </Typography>
            : 

            <CardContent>

            <TextField  name={bookmark.player.name} placeholder={bookmark.comments} value={comment} onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={handleUpdate}>Submit</Button>
            <Button nt="contained" sx={{mx:2 , my:3}} onClick={() => setClick(!click)}>Cancel</Button>
            </CardContent>
            
            }
              </CardContent>
              <CardContent sx={{dislpay: "flex" , justifyContent: "center", alignItems: "center"  , flexDirection: "column" , align: "center"}}>
              <Button  variant="contained" sx={{mx:2 , my:3}} onClick={() => setClick(!click)}>Edit</Button>
              <br />
              <Button  variant="contained" sx={{mx:2 , my:3}} onClick={() => handleDelete(bookmark.id)}>Delete</Button>
              </CardContent>
            </Card>
            {/* <div key={bookmark.id} className="player-card">
            <p><img src={bookmark.player?.photo} alt="" /></p>
            <p>Name: {bookmark.player?.name}</p>
            <h4></h4>
            <p >Club Name: <img className="playerTeamLogo" src={bookmark?.stats?.team.logo} alt=""  />   {bookmark.stats?.team.name}</p>
            <p>Position: {bookmark.stats?.games.position}</p>
            <p>Goals: {bookmark.stats?.goals.total}</p>
            <p>Assist: {bookmark.stats?.goals.assists}</p>

            { !click ? 
            <p onClick={handleClick}> Comments: {bookmark.comments} <br /></p>
            : 
            <>

            <input className="comment" name={bookmark.player.name} placeholder={bookmark.comments} value={comment} onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleUpdate}>Submit</button>
            </>
            
            }
            
            <button onClick={() => setClick(!click)}>Edit</button>
            <button onClick={() => handleDelete(bookmark.id)}>Delete</button>

          </div> */}

          
        </>


    )
}

export default BookmarkItem;