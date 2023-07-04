const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {callApi} = require('../modules/api.cache');

router.get('/:id' , (req , res) => {
    console.log('GET /player');

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players',
        params: {
            id: req.params.id,
            season: '2022'
        },
        headers: {
            'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    callApi(options).then(results => {
        res.send(results);
    }).catch(err => {
        console.log('Error in GET /player' , err);
        res.sendStatus(500)
    })
})

router.post('/:id', (req , res) => {
    console.log("REQ PARAMS ID",req.params.id);
    const queryText = `INSERT INTO "bookmarks" ("player_id" , "comments" , "user_id") VALUES ($1 , $2, $3)`
    console.log('Req.body.comments' , req.body.comment);
    pool.query(queryText , [req.params.id , req.body.comment, req.user.id])
    .then(result => {
        res.send(result.rows)
        // res.sendStatus(201)
    }).catch(err => {
        console.log('Error in POST /player.router' , err)
        res.sendStatus(500);
    })
})

module.exports = router;