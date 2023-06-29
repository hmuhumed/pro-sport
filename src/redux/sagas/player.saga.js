import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* playerLeague(action){

    try{
        const player = yield axios.get(`api/players/${action.payload}`)
        console.log('player.data' , player.data)

        yield put({
            type: 'SET_PLAYER',
            payload: player.data
        })
    } catch(error){
        console.log('Error in /player saga', error);
    }
}

function* playerSaga(){
    yield takeLatest('FETCH_PLAYER' , playerLeague);
}

export default playerSaga;