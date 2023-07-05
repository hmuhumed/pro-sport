import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateBookmark(action){

    const updatedBookmark = action.payload.id
    const objToSend = {comments: action.payload.comment}
    console.log('updatedBookmark:', updatedBookmark)
    console.log('This is comments:', action.payload.comment)
    try{
        yield axios.put(`/api/bookmarks/update/${updatedBookmark}`, objToSend)
       

        yield put({
            type: "FETCH_BOOKMARK" 
        })

    } catch (error) {
        console.log('Error in PUT /update.saga', error)
    }
}

function* updateSaga(){
    yield takeLatest("UPDATE_COMMENT", updateBookmark)
}

export default updateSaga;