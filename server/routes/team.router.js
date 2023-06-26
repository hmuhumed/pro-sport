const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { callApi } = require('../modules/api.cache');

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('GET /team/:id')
  // GET route code here
  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
    params: {id: req.params.id},
    headers: {
      'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  callApi(options).then(results => {
    res.send(results);
  }).catch(e =>{
    console.log(e);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
