import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import standingsSaga from './league.saga';
import fixtureSaga from './fixtures.saga';
import squadSaga from './squad.saga';
import playerSaga from './player.saga';
import bookmarkSaga from './bookmark.saga';
import deleteSaga from './delete.saga';
import updateSaga from './update.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    standingsSaga(),
    fixtureSaga(),
    squadSaga(),
    playerSaga(),
    bookmarkSaga(),
    deleteSaga(),
    updateSaga()
  ]);
}
