import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* ligaFixture(){

    try{
        const ligaFixtures = yield axios.get('/api/ligaFixture')
        console.log('Fixtures data' , ligaFixtures.data);
        yield put({
            type: 'SET_LIGAFIXTURES',
            payload: ligaFixtures.data
        })
    } catch (error) {
        console.log('Error in saga generator function /fixtures.saga' , error)
    }
}

function* ligaFixtureSaga(){
    yield takeLatest('FETCH_LIGAFIXTURES' , ligaFixture)
}

export default ligaFixtureSaga;