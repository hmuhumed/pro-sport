import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* laLiga(){

    try{
        const laLigaData = yield axios.get("/api/laLiga")
        console.log("laLigaData:" , laLigaData.data);

        yield put({
            type: "SET_LALIGA",
            payload: laLigaData.data
        })

    } catch (error){
        console.log("Error in GET /laLiga saga", error)
    }

};

function* laLigaSaga(){
    yield takeLatest("FETCH_LALIGA", laLiga)
};

export default laLigaSaga;

