const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const teamRouter = require('./routes/team.router');
const leagueRouter = require('./routes/league.router');
const fixtureRouter = require('./routes/fixtures.router');
const squadRouter = require('./routes/squad.router');
const playerRouter = require('./routes/player.routes')
const bookmarkRouter = require('./routes/bookmarks.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/team', teamRouter);
app.use('/api/standings', leagueRouter);
app.use('/api/fixtures', fixtureRouter);
app.use('/api/players/squads' , squadRouter);
app.use('/api/players' , playerRouter)
app.use('/api/bookmarks' , bookmarkRouter)


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5004;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


