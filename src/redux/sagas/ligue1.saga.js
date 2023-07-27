import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* ligueOne(){

    try{
        const ligue1 = yield axios.get("/api/ligue1")
        console.log("Ligue1 data:" , ligue1.data)

        yield put({
            type: "SET_LIGUE1",
            payload: ligue1.data
        })

    } catch(error) {
        console.log('Error in GET /ligue1 saga', error)
    }

}

function* ligue1Saga(){
    yield takeLatest("FETCH_LIGUE1", ligueOne);
}

export default ligue1Saga;