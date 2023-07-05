const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {callApi} = require('../modules/api.cache');

router.get('/' , (req, res) => {

    const queryText = `SELECT * FROM "bookmarks" WHERE "user_id" = $1`
    pool.query(queryText, [req.user.id]).then(result => {
        // console.log('GET result from database' , result)
        // res.send(result)
        const apiPromise = []
        for (const row of result.rows){

        
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: {
                id: row.player_id,
                season: '2022'
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };
        apiPromise.push(callApi(options))
    }
    Promise.all(apiPromise)
    .then(apiResult => {
        
      

        const bookmarkResponse = result.rows.map(bookmark => {
            const foundPlayer = apiResult.find(player => bookmark.player_id === player?.response[0]?.player?.id)
            return {id: bookmark.id , comments: bookmark.comments , player: foundPlayer?.response[0]?.player, stats: foundPlayer?.response[0]?.statistics[0]}
        })

        
        res.send(bookmarkResponse)
        
    }).catch(error => {
        console.log('Error in PromiseApiCall:', error)
    })
    }).catch(err => {
        console.log('Error in GET /bookmarks.router' , err)
    })
})

router.delete('/delete/:id', (req, res) => {
    const idToDel = [req.params.id]
    console.log('IdToDel:' , [idToDel])
    const queryText = `DELETE FROM "bookmarks" WHERE id=$1;`
    pool.query(queryText, idToDel).then(result => {
        res.sendStatus(201);
    }).catch(err => {
        console.log('Error deleting bookmark:', err)
        res.sendStatus(500)
    })
})

router.put('/update/:id', (req , res) => {
    // const idToUpdate = [req.params.id]
    // console.log('IdToUpdate:', idToUpdate);
    const queryText = `UPDATE "bookmarks" SET "comments" = $1 WHERE "id" = $2`
    console.log('This is server comment:', req.body)
    console.log('This is req.params.id:', req.params.id)
    pool.query(queryText , [req.body.comments , req.params.id]).then(result => {
        res.sendStatus(201)
    }).catch(err => {
        console.log('Error in PUT /bookmark.router', err);
        res.sendStatus(500);
    })
})

module.exports = router;