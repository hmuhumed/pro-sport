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

module.exports = router;