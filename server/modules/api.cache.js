const pool = require('./pool');
const axios = require('axios');
const dailyLimit = 70;

const callApi = async (options) => {
    try {
        // query to get the number of requests made today
        const requestCount = await pool.query(`
            SELECT COUNT(*) FROM "cache"
            WHERE NOW() - created_at::timestamp <= interval '24 hours'
        `);
        // Check for cached results
        let cachedResponse;
        if (options.params) {
            cachedResponse = await pool.query(`
                SELECT response FROM "cache"
                WHERE "method" = $1 AND "url" = $2 AND "params" = $3
                ORDER BY "created_at" DESC
                LIMIT 1;
            `, [options.method, options.url, JSON.stringify(options.params)]);
        } else if (options.qs) {
            cachedResponse = await pool.query(`
                SELECT response FROM "cache"
                WHERE "method" = $1 AND "url" = $2 AND "params" = $3
                ORDER BY "created_at" DESC
                LIMIT 1;
            `, [options.method, options.url, JSON.stringify(options.qs)]);
        } else {
            cachedResponse = await pool.query(`
                SELECT response FROM "cache"
                WHERE "method" = $1 AND "url" = $2
                ORDER BY "created_at" DESC
                LIMIT 1;
            `, [options.method, options.url]);
        }
        if (cachedResponse.rows.length > 0) {
            console.log('Using cached response')
            return JSON.parse(cachedResponse.rows[0].response);
        } else if (requestCount.rows[0].count < dailyLimit) {
            // store the data in the database
            let result = await pool.query(`
                INSERT INTO "cache" ("method", "url", "params")
                VALUES ($1, $2, $3) RETURNING "id";
            `, [options.method, options.url, JSON.stringify(options.params || options.qs)]);
            // console.log(result);
            // make API request
            let apiResponse = await axios.request(options);
            // save response into the database as cache
            await pool.query(`
                UPDATE "cache" SET "response" = $1
                WHERE "id" = $2;
            `, [JSON.stringify(apiResponse.data), result.rows[0].id]);
            return apiResponse.data;
        } else {
            throw new Error('API limit reached!');
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = {
    callApi,
}