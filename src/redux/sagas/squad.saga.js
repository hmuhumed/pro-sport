import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* leagueSquad(action){

    try{
        const squad = yield axios.get(`api/players/squads/${action.payload}`)
        console.log('squad.data' , squad.data)

        yield put({
            type: 'SET_SQUAD',
            payload: squad.data
        })
    } catch(error) {
        console.log('Error in GET /squad' , error)
    }
};

function* squadSaga(){
    yield takeLatest('FETCH_SQUAD' , leagueSquad)
}

export default squadSaga;

