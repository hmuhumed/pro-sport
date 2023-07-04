const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {callApi} = require('../modules/api.cache');

router.get('/' , (req, res) => {

    const queryText = `SELECT * FROM "bookmarks" WHERE "user_id" = $1`
    pool.query(queryText, [req.user.id]).then(result => {
        console.log('GET result from database' , result)
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
        
        // console.log('This is apiResult:' , apiResult)
        // const finalResult = apiResult?.map(item => item.response[0])
        
        // console.log('This is finalResult:', finalResult)
        // const player = finalResult?.map(item => item.player);

        // const statistics = apiResult.response?.map(item => item.statistics)
        // console.log('This is player data:', player)
        // console.log('This is statistics:', statistics)
        // const playerResult = apiResult[0].response[0].player
        // const playerStats = apiResult[0].response[0].statistics[0]
        
        // const playerClub = playerStats.team.name
        // const playerGoals = playerStats.goals.total
        // const playerAssists = playerStats.goals.assists

        const bookmarkResponse = result.rows.map(bookmark => {
            const foundPlayer = apiResult.find(player => bookmark.player_id === player?.response[0]?.player?.id)
            return {id: bookmark.id , comments: bookmark.comments , player: foundPlayer?.response[0]?.player, stats: foundPlayer?.response[0]?.statistics[0]}
        })

        
        res.send(bookmarkResponse)
        console.log('Combined results:', combinedResults)
    }).catch(error => {
        console.log('Error in PromiseApiCall:', error)
    })
    }).catch(err => {
        console.log('Error in GET /bookmarks.router' , err)
    })
})


module.exports = router;