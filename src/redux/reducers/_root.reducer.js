import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import leagueReducer from './league.reducer';
import fixturesReducer from './fixtures.reducer';
import squadReducer from './squad.reducer';
import playerReducer from './player.reducer';
import bookmarkReducer from './bookmark.reducer';
import laLigaReducer from './laLiga.reducer';
import ligaFixturesReducer from './ligaFxiture.reducer';
import ligue1Reducer from './ligue1.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  leagueReducer,
  fixturesReducer,
  squadReducer,
  playerReducer,
  bookmarkReducer,
  laLigaReducer,
  ligaFixturesReducer,
  ligue1Reducer

});

export default rootReducer;
