const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {callApi} = require('../modules/api.cache');

router.get('/' , (req, res) => {
    console.log('GET /fixtures');

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
        params: {
            season: '2022',
            league: '140',
            last: '10'
        },
        headers: {
            'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
            'X_RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    callApi(options).then(results => {
        res.send(results);
    }).catch(err => {
        console.log('Error in GET /leagues' , err)
        res.sendStatus(500)
    })
})

module.exports = router