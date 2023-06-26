import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* leagueStandings(){

    try{
        const standings = yield axios.get('api/standings')
        console.log('Standings data: ' , standings.data)
        yield put({
            type: 'SET_STANDINGS',
            payload: standings.data
        })
    }catch (error) {
        console.log('Error in saga generator function /league.saga' , error)
    }
}

function* standingsSaga(){
    yield takeLatest('FETCH_STANDINGS' , leagueStandings)
}


export default standingsSaga;