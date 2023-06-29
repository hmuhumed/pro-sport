import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* leagueFixture(){

    try{
        const fixtures = yield axios.get('api/fixtures')
        console.log('Fixtures data' , fixtures.data);
        yield put({
            type: 'SET_FIXTURES',
            payload: fixtures.data
        })
    } catch (error) {
        console.log('Error in saga generator function /fixtures.saga' , error)
    }
}

function* fixtureSaga(){
    yield takeLatest('FETCH_FIXTURES' , leagueFixture)
}

export default fixtureSaga;